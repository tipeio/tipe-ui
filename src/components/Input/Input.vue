<template>
  <div 
    :class="classObject"
    :data-tipe-ui="$options.name" 
    class="input-flex">
    <label :htmlFor="label">{{ label }}</label>
    <input 
      :disabled="disabled"
      :type="type" 
      :id="label" 
      :placeholder="placeholder" 
      :value="value.value"
      @change="onChange"
      @blur="onChange" >
    <p 
      v-if="value.changed && validity.message" 
      class="message">{{ validity.message }}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeInput',
  props: {
    placeholder: vueTypes.string.isRequired,
    label: vueTypes.string.isRequired,
    disabled: vueTypes.bool.def(false),
    type: vueTypes.oneOf(['text', 'email', 'password']).def('text'),
    value: vueTypes.object.isRequired,
    validity: vueTypes.object,
    size: vueTypes.oneOf(['small', 'normal', 'large']).def('normal')
  },
  computed: {
    classObject: function() {
      const { size } = this
      return {
        [size]: true,
        success: this.validity.status === 'success' && this.value.changed,
        error: this.validity.status === 'error' && this.value.changed,
        warning: this.validity.status === 'warning' && this.value.changed
      }
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
    font-weight: 500;
    font-size: 0.8125rem;
  }

  & input {
    border: none;
    border-bottom: #b5baca solid 1px;
    color: #1f346c;
    font-size: 0.875rem;
  }

  & .message {
    font-size: 0.6875rem;
    margin: 0;
    margin-top: 6.5px;
  }

  &.small {
    & ::placeholder {
      color: #b5baca;
      font-size: 0.75rem;
    }

    & input {
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

        & label {
          color: #f38438;
        }

        & .message {
          color: #f38438;
        }
      }
    }
  }

  &.normal {
    & ::placeholder {
      color: #b5baca;
      font-size: 0.875rem;
    }
    & input {
      height: 2.6875rem;
      &:focus {
        height: calc(2.6875rem - 1px);
        border-bottom: #b5baca solid 2px;
      }
    }
    &.success {
      & input {
        border-bottom: #16e4a4 solid 1px;
        &:focus {
          height: calc(2.6875rem - 1px);
          border-bottom: #16e4a4 solid 2px;
        }
      }
    }

    &.error {
      & input {
        border-bottom: #e44646 solid 1px;
        box-shadow: none;
        &:focus {
          height: calc(2.6875rem - 1px);
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
          height: calc(2.6875rem - 1px);
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

  &.large {
    & ::placeholder {
      color: #b5baca;
      font-size: 1.125rem;
    }
    & input {
      height: 3.375rem;
      &:focus {
        height: calc(3.375rem - 1px);
        border-bottom: #b5baca solid 2px;
      }
    }
    &.success {
      & input {
        border-bottom: #16e4a4 solid 1px;
        &:focus {
          height: calc(3.375rem - 1px);
          border-bottom: #16e4a4 solid 2px;
        }
      }
    }

    &.error {
      & input {
        border-bottom: #e44646 solid 1px;
        box-shadow: none;
        &:focus {
          height: calc(3.375rem- 1px);
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
          height: calc(3.375rem - 1px);
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
}
</style>
