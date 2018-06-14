<template>
  <input 
    :class="classObject"
    :name="name"
    :data-tipe-ui="$options.name" 
    :disabled="isDisabled"
    :id="label"
    :placeholder="placeholder" 
    :value="value" 
    :tabindex="tabindex"
    type="text"
    @click="inputEmit('click')"
    @blur="inputEmit('blur')"
    @focus="inputEmit('focus')"
    @change="inputEmit('change')">
</template>

<script>
import textInputShape from '@/types/TextInput'

export default {
  name: 'TipeTextInput',
  props: textInputShape,
  computed: {
    classObject() {
      const { size, status, waiting } = this
      return {
        [size]: true,
        success: status === 'success',
        error: status === 'error',
        warning: status === 'warning',
        waiting
      }
    },
    isDisabled() {
      if (this.waiting || this.disabled) return true
      return false
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
input {
  border: none;
  border-bottom: #b5baca solid 1px;
  color: #1f346c;
  font-size: 0.875rem;
  display: flex;
  width: 100%;

  &:disabled {
    color: #d4d7d9;
    cursor: not-allowed;
    background-color: #fff; // for firefox
    &::placeholder {
      color: #d4d7d9;
    }
  }

  &.waiting {
    cursor: wait;
  }

  &.small {
    & ::placeholder {
      color: #b5baca;
      font-size: 0.75rem;
    }
    height: 2.5rem;
    &:focus {
      height: calc(2.5rem - 1px);
      border-bottom: #b5baca solid 2px;
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
        box-shadow: none;
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
    }
  }

  &.medium {
    & ::placeholder {
      color: #b5baca;
      font-size: 0.875rem;
    }
    height: 2.6875rem;
    &:focus {
      height: calc(2.6875rem - 1px);
      border-bottom: #b5baca solid 2px;
    }
    &.success {
      border-bottom: #16e4a4 solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: #16e4a4 solid 2px;
      }
    }

    &.error {
      border-bottom: #e44646 solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: #e44646 solid 2px;
      }
    }

    &.warning {
      border-bottom: #f38438 solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: #f38438 solid 2px;
      }
    }
  }

  &.large {
    & ::placeholder {
      color: #b5baca;
      font-size: 1.125rem;
    }

    height: 3.375rem;
    &:focus {
      height: calc(3.375rem - 1px);
      border-bottom: #b5baca solid 2px;
    }

    &.success {
      border-bottom: #16e4a4 solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: #16e4a4 solid 2px;
      }
    }

    &.error {
      border-bottom: #e44646 solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(3.375rem- 1px);
        border-bottom: #e44646 solid 2px;
      }
    }

    &.warning {
      border-bottom: #f38438 solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: #f38438 solid 2px;
      }
    }
  }
}
</style>
