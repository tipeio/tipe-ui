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
    type="checkbox"
    @click="inputEmit('click')"
    @blur="inputEmit('blur')"
    @focus="inputEmit('focus')"
    @change="inputEmit('change')">
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'

export default {
  name: 'TipeCheckbox',
  props: {
    label: vueTypes.string,
    placeholder: vueTypes.string,
    ...inputProps
  },
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
        border-bottom: var(--success) solid 1px;
        &:focus {
          height: calc(2.5rem - 1px);
          border-bottom: var(--success) solid 2px;
        }
      }
    }

    &.error {
      & input {
        border-bottom: var(--error) solid 1px;
        box-shadow: none;
        &:focus {
          height: calc(2.5rem - 1px);
          border-bottom: var(--error) solid 2px;
        }
      }

      & label {
        color: var(--error);
      }

      & .message {
        color: var(--error);
      }
    }

    &.warning {
      & input {
        border-bottom: var(--warning) solid 1px;
        &:focus {
          height: calc(2.5rem - 1px);
          border-bottom: var(--warning) solid 2px;
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
      border-bottom: var(--success) solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--success) solid 2px;
      }
    }

    &.error {
      border-bottom: var(--error) solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--error) solid 2px;
      }
    }

    &.warning {
      border-bottom: var(--warning) solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--warning) solid 2px;
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
      border-bottom: var(--success) solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: var(--success) solid 2px;
      }
    }

    &.error {
      border-bottom: var(--error) solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(3.375rem- 1px);
        border-bottom: var(--error) solid 2px;
      }
    }

    &.warning {
      border-bottom: var(--warning) solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: var(--warning) solid 2px;
      }
    }
  }
}
</style>
