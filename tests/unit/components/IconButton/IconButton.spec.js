import { shallowMount } from '@vue/test-utils'
import IconButton from '@/components/IconButton'

describe('Button.vue', () => {
  it('should render an icon button', () => {
    const wrapper = shallowMount(IconButton, {
      propsData: { icon: 'delete' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toHaveLength(0)
  })
  it('should render a round icon button', () => {
    const wrapper = shallowMount(IconButton, {
      propsData: { round: true, icon: 'edit' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('round')
  })
})
