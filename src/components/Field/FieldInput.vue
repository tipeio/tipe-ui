<script>
import fieldShape from '@/types/Field'

const { name, status, field } = fieldShape

export default {
  name: 'TipeFieldInput',
  props: {
    name: {
      type: name,
      default: ''
    },
    status: {
      type: status,
      default: ''
    },
    field: {
      type: field,
      default: {}
    }
  },
  render: function(createElement) {
    const fieldSlots = slots => {
      if (!slots) return []
      return slots.map(slot => {
        slot.componentOptions.propsData = {
          name: this.name,
          ...this.field,
          status: this.status
        }
        return slot
      })
    }

    return createElement('div', fieldSlots(this.$slots.default))
  }
}
</script>
