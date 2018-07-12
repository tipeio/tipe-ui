<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeFieldInput',
  props: {
    name: vueTypes.string.def(''),
    field: vueTypes.object.def({}),
    status: vueTypes.oneOf(['error', 'success', 'warning', '']).def('')
  },
  render: function(createElement) {
    const fieldSlots = slots => {
      if (!slots) return []
      return slots.map(slot => {
        slot.componentOptions.propsData = {
          name: this.name,
          ...this.field,
          ...(this.status && { status: this.status })
        }
        return slot
      })
    }

    return createElement('div', fieldSlots(this.$slots.default))
  }
}
</script>
