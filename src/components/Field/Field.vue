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
  render: function(createElement) {
    const divOptions = {
      class: {
        success: this.status === 'success',
        error: this.status === 'error',
        warning: this.status === 'warning'
      },
      on: {
        click: function(val) {
          this.$emit('click', val)
        },
        focus: function(val) {
          this.$emit('focus', val)
        },
        change: function(val) {
          this.$emit('change', val)
        },
        blur: function(val) {
          this.$emit('blur', val)
        }
      }
    }
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

    const fieldSlots = slots =>
      slots.map(slot => {
        slot.componentOptions.propsData = { name: this.name, ...this.field }
        return slot
      })

    // no label and no message
    if (!computedMessage() && !this.label) {
      return createElement('div', divOptions, fieldSlots(this.$slots.default))
    } else if (!computedMessage()) {
      // no message
      return createElement('div', divOptions, [
        createElement('label', {
          attrs: {
            htmlFor: this.name
          },
          domProps: {
            innerHTML: this.label
          }
        }),
        fieldSlots(this.$slots.default)
      ])
    } else if (!this.label) {
      // no label
      return createElement('div', divOptions, [
        fieldSlots(this.$slots.default),
        createElement('span', {
          domProps: {
            innerHTML: computedMessage()
          }
        })
      ])
    } else {
      // both
      return createElement('div', divOptions, [
        createElement('label', {
          attrs: {
            htmlFor: this.name
          },
          domProps: {
            innerHTML: this.label
          }
        }),
        fieldSlots(this.$slots.default),
        createElement('span', {
          domProps: {
            innerHTML: computedMessage()
          }
        })
      ])
    }
  }
}
</script>
