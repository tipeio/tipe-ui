<template>
  <div
    :class="classObject"
    :data-tipe-ui="$options.name"
    class="radio">
    <div class="radio-flex">
      <input
        ref="radio"
        :name="name"
        :disabled="isDisabled"
        :id="label"
        :value="value"
        :tabindex="tabindex"
        :checked="checked"
        type="radio"
        @keyup.enter="$refs.checkbox.click()"
        @click="inputEmit('click')"
        @blur="inputEmit('blur')"
        @focus="inputEmit('focus')"
        @change="inputEmit('change')">
    </div>
    <label
      :for="label"
      class="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'

export default {
  name: 'TipeRadio',
  props: {
    label: vueTypes.string,
    checked: vueTypes.bool.def(false),
    ...interfaces.input
  },
  computed: {
    classObject() {
      const { size, waiting, status } = this
      return {
        [size]: true,
        [`status-${status}`]: status,
        waiting
      }
    },
    isDisabled() {
      if (this.waiting || this.disabled) return true
      return false
    },
    checkSize() {
      switch (this.size) {
        case 'small':
          return {
            height: '0.375rem',
            width: '0.5rem'
          }
        case 'medium':
          return {
            height: '0.5rem',
            width: '0.625rem'
          }
        case 'large':
          return {
            height: '0.625rem',
            width: '0.75rem'
          }
        default:
          return {
            height: '0.5rem',
            width: '0.625rem'
          }
      }
    }
  },
  methods: {
    inputEmit(type) {
      this.$emit(type)
    }
  }
}
</script>

<style scoped lang="postcss">
.radio {
  display: flex;
  width: 100%;
  align-items: center;
}

.radio-flex {
  display: flex;
  flex: 0 0 2rem;
}

input:disabled {
  cursor: not-allowed;
}

input:focus {
  border: solid 1px #6849fc;
}

input {
  border-radius: 100%;
  margin: 0;
  width: 1.125rem;
  height: 1.125rem;
  border: solid 1px #b5baca;

  &:hover {
    cursor: pointer;
  }
}

.small {
  & input {
    border-radius: 100%;
    width: 0.625rem;
    height: 0.625rem;
  }
  & input:checked {
    border: 0.21rem solid #6849fc;
  }
  & .radio-flex {
    display: flex;
    flex: 0 0 calc(2rem - 0.625rem);
  }
}

.large {
  & input {
    width: 1.25rem;
    height: 1.25rem;
  }
  & input:checked {
    border: 0.42rem solid #6849fc;
  }
  & .radio-flex {
    display: flex;
    flex: 0 0 calc(2rem + 0.1875rem);
  }
}
.status-success {
  & input:checked {
    border-color: var(--success);
  }
}

.status-warning {
  & input:checked {
    border-color: var(--warning);
  }
}

.status-error {
  & input:checked {
    border-color: var(--error);
  }
}

.waiting {
  cursor: wait;
  & input {
    cursor: wait;
  }
}

input:checked {
  border: 0.4rem solid #6849fc;
  &.success {
    border: solid 1px var(--success);
  }

  &.warning {
    border: solid 1px var(--warning);
  }

  &.error {
    border: solid 1px var(--error);
  }
}

.label {
  letter-spacing: 0.3px;
  color: #1f346c;
  display: flex;
  flex: 1 1 auto;
}
</style>
