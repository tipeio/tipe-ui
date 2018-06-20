<script>
import vueTypes from 'vue-types'
import optionShape from '@/types/CheckboxOptions'

export default {
  name: 'TipeCheckboxContainer',
  props: {
    option: vueTypes.shape(optionShape)
  },
  render: function(createElement) {
    const checkGroupSlots = slots => {
      if (!slots) return []
      return slots.map(slot => {
        slot.componentOptions.propsData = {
          ...this.option
        }
        return slot
      })
    }

    return createElement('div', checkGroupSlots(this.$slots.default))
  }
}
</script>
