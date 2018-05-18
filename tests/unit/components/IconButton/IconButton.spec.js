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
  it('should emit an onclick event', () => {
    const action = jest.fn()
    const wrapper = shallowMount(IconButton, {
      propsData: { '@click': action, icon: 'trash' }
    })
    wrapper.setMethods({ action: action('clicked') })
    wrapper.trigger('click')
    expect(action.mock.calls).toHaveLength(1)
  })
})
