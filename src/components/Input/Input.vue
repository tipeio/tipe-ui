<template>
  <div 
    :class="{success: status === 'success', error: status === 'error', warning: status === 'warning'}" 
    class="input-flex">
    <label :htmlFor="textLabel">{{ textLabel }}</label>
    <input 
      :type="inputType" 
      :id="textLabel" 
      :placeholder="textPlaceholder" 
      :value="value"
      @change="onChange" >
    <p 
      v-if="message" 
      class="message">{{ message }}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeInput',
  props: {
    textPlaceholder: vueTypes.string.isRequired,
    textLabel: vueTypes.string.isRequired,
    inputType: vueTypes.string.def('text'),
    value: vueTypes.string
  },
  data() {
    return {
      valid: '',
      message: '',
      status: ''
    }
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style scoped lang="postcss">
.input-flex {
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    color: #627098;
    font-size: 0.8125rem;
  }

  & input {
    border: none;
    border-bottom: #b5baca solid 1px;
    height: 2.5rem;
    color: #1f346c;
    font-size: 0.875rem;

    & ::placeholder {
      color: #b5baca;
      font-size: 0.875rem;
    }

    &:focus {
      height: calc(2.5rem - 1px);
      border-bottom: #b5baca solid 2px;
    }
  }

  & .message {
    font-size: 0.6875rem;
    margin: 0;
    margin-top: 6.5px;
  }

  &.success {
    & input {
      border-bottom: #16e4a4 solid 1px;
      &:focus {
        height: calc(2.5rem - 1px);
        border-bottom: #16e4a4 solid 2px;
      }
    }
  }

  &.error {
    & input {
      border-bottom: #e44646 solid 1px;
      &:focus {
        height: calc(2.5rem - 1px);
        border-bottom: #e44646 solid 2px;
      }
    }

    & label {
      color: #e44646;
    }

    & .message {
      color: #e44646;
    }
  }

  &.warning {
    & input {
      border-bottom: #f38438 solid 1px;
      &:focus {
        height: calc(2.5rem - 1px);
        border-bottom: #f38438 solid 2px;
      }
    }

    & label {
      color: #f38438;
    }

    & .message {
      color: #f38438;
    }
  }
}
</style>
