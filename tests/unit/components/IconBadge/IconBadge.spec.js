import { shallowMount } from '@vue/test-utils'
import IconBadge from '@/components/IconBadge'
import Icon from '@/components/Icon'

describe('IconBadge.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(IconBadge, {
      propsData: {
        icon: 'rocket'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with the card class', () => {
    const wrapper = shallowMount(IconBadge, {
      propsData: {
        icon: 'rocket'
      }
    })
    expect(wrapper.classes()).toContain('card')
  })
  it('should pass the icon prop', () => {
    const wrapper = shallowMount(IconBadge, {
      propsData: {
        icon: 'rocket'
      }
    })
    expect(wrapper.props().icon).toBe('rocket')
  })
  it('should contain the icon component', () => {
    const wrapper = shallowMount(IconBadge, {
      propsData: {
        icon: 'rocket'
      }
    })
    expect(wrapper.find(Icon).exists()).toBe(true)
  })
})
