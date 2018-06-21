import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeCheckbox from '@/components/Checkbox'
import TipeCheckboxGroup from '@/components/CheckboxGroup'

const props = {
  options: [
    { label: 'Javascript', value: 'javascript', checked: true },
    { label: 'Python', value: 'python', checked: false }
  ],
  name: 'languages'
}

describe('CheckboxGroup.vue', () => {
  it.skip('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeCheckboxGroup, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeCheckbox]
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it.skip('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(TipeCheckboxGroup, {
      propsData: {
        ...props
      },
      components: { TipeCheckbox },
      scopedSlots: {
        checkbox: `<tipe-checkbox v-for="option in options"
          slot-scope="{option}"
          :key="option.value"
          :name="name"
          :label="option.label"
          :value="option.value"
          :checked="option.checked"/>`
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeCheckboxGroup')
  })
})
