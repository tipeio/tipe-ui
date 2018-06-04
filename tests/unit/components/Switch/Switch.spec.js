import { shallowMount } from '@vue/test-utils'
import TipeSwitch from '@/components/Switch'

describe('Progress.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        text: 'Share Location'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should have the correct label', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        text: 'Share Location'
      }
    })
    expect(wrapper.find('.label').text()).toBe('Share Location')
  })
  it('should have the correct sublabel', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        text: 'Share Location',
        sublabel: 'Share location while using the app'
      }
    })
    expect(wrapper.find('.sublabel').text()).toBe(
      'Share location while using the app'
    )
  })
  it('should not render with a sublabel', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        text: 'Share Location'
      }
    })
    expect(wrapper.find('.sublabel').exists()).toBe(false)
  })
  it('should have the correct value prop', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        text: 'Share Location',
        value: true
      }
    })
    expect(wrapper.props().value).toBe(true)
  })
})
