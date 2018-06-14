<script>
import fieldShape from '@/types/FieldInput'

export default {
  name: 'TipeFieldInput',
  props: fieldShape,
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
