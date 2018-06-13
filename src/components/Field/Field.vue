<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeField',
  props: {
    name: vueTypes.string,
    field: vueTypes.object,
    label: vueTypes.string.isRequired,
    status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
    errorMessage: vueTypes.string,
    successMessage: vueTypes.string,
    warningMessage: vueTypes.string
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    focus(event) {
      this.$emit('focus', event)
    },
    blur(event) {
      this.$emit('blur', event)
    },
    change(event) {
      this.$emit('change', event)
    }
  },
  render: function(createElement) {
    const computedMessage = () => {
      var message = ''
      switch (this.status) {
        case 'error':
          message = this.errorMessage
          break
        case 'warning':
          message = this.warningMessage
          break
        case 'success':
          message = this.successMessage
          break
        default:
          message = ''
      }
      return message
    }

    const divOptions = {
      class: {
        success: this.status === 'success',
        error: this.status === 'error',
        warning: this.status === 'warning'
      },
      on: {
        click: this.click,
        focus: this.focus,
        change: this.change,
        blur: this.blur
      },
      attrs: {
        'data-tipe-ui': this.$options.name
      }
    }
    const labelOptions = {
      attrs: {
        for: this.label
      },
      domProps: {
        innerHTML: this.label
      }
    }

    const spanOptions = {
      domProps: {
        innerHTML: computedMessage()
      },
      class: {
        message: true
      }
    }

    const fieldSlots = slots =>
      slots.map(slot => {
        slot.componentOptions.propsData = {
          name: this.name,
          ...this.field,
          status: this.status
        }
        return slot
      })

    // no label and no message
    if (!computedMessage() && !this.label) {
      return createElement('div', divOptions, fieldSlots(this.$slots.default))
    } else if (!computedMessage()) {
      // no message
      return createElement('div', divOptions, [
        createElement('label', labelOptions),
        fieldSlots(this.$slots.default)
      ])
    } else if (!this.label) {
      // no label
      return createElement('div', divOptions, [
        fieldSlots(this.$slots.default),
        createElement('span', spanOptions)
      ])
    } else {
      // both
      return createElement('div', divOptions, [
        createElement('label', labelOptions),
        fieldSlots(this.$slots.default),
        createElement('span', spanOptions)
      ])
    }
  }
}
</script>
<style lang="postcss">
label {
  color: #627098;
  font-weight: 500;
  font-size: 0.8125rem;
}

.message {
  font-size: 0.6875rem;
  margin: 0;
  margin-top: 6.5px;
}
.warning {
  & label {
    color: #f38438;
  }

  & .message {
    color: #f38438;
  }
}
.success {
  & label {
    color: #16e4a4;
  }

  & .message {
    color: #16e4a4;
  }
}
.error {
  & label {
    color: #e44646;
  }

  & .message {
    color: #e44646;
  }
}
</style>
