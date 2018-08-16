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
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'

export default {
  name: 'TipeTextInput',
  props: {
    label: vueTypes.string,
    placeholder: vueTypes.string,
    ...interfaces.input
  },
  computed: {
    classObject() {
      const { size, status, waiting } = this
      return {
        [size]: true,
        [`status-${status}`]: status,
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
  background-color: transparent;

  &:disabled {
    color: #d4d7d9;
    cursor: not-allowed;
    background-color: transparent; // for firefox
    &::placeholder {
      color: #d4d7d9;
    }
  }

  &.waiting {
    cursor: wait;
  }

  &::placeholder {
    color: var(--text-gray-blue-light);
  }

  &.small {
    & ::placeholder {
      font-size: 0.75rem;
    }
    height: 2.5rem;
    &:focus {
      height: calc(2.5rem - 1px);
      border-bottom: #b5baca solid 2px;
    }
    &.status-success {
      & input {
        border-bottom: var(--success) solid 1px;
        &:focus {
          height: calc(2.5rem - 1px);
          border-bottom: var(--success) solid 2px;
        }
      }
    }

    &.status-error {
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

    &.status-warning {
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
      font-size: 0.875rem;
    }
    height: 2.6875rem;
    &:focus {
      height: calc(2.6875rem - 1px);
      border-bottom: #b5baca solid 2px;
    }
    &.status-success {
      border-bottom: var(--success) solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--success) solid 2px;
      }
    }

    &.status-error {
      border-bottom: var(--error) solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--error) solid 2px;
      }
    }

    &.status-warning {
      border-bottom: var(--warning) solid 1px;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: var(--warning) solid 2px;
      }
    }
  }

  &.large {
    & ::placeholder {
      font-size: 1.125rem;
    }

    height: 3.375rem;
    &:focus {
      height: calc(3.375rem - 1px);
      border-bottom: #b5baca solid 2px;
    }

    &.status-success {
      border-bottom: var(--success) solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: var(--success) solid 2px;
      }
    }

    &.status-error {
      border-bottom: var(--error) solid 1px;
      box-shadow: none;
      &:focus {
        height: calc(3.375rem- 1px);
        border-bottom: var(--error) solid 2px;
      }
    }

    &.status-warning {
      border-bottom: var(--warning) solid 1px;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: var(--warning) solid 2px;
      }
    }
  }
}
</style>
