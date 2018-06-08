import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeSwitch from '@/components/Switch'

const props = {
  label: 'Share Location',
  name: 'location'
}
describe('Progress.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        ...props
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSwitch')
  })
  it('should have the correct label', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.find('.label').text()).toBe('Share Location')
  })
  it('should have the correct value prop', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        ...props,
        value: true
      }
    })
    expect(wrapper.props().value).toBe(true)
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeSwitch, {
      propsData: {
        ...props,
        value: false,
        disabled: true
      }
    })
    expect(wrapper.props().label).toBe('Share Location')
    expect(wrapper.props().value).toBe(false)
    expect(wrapper.props().name).toBe('location')
    expect(wrapper.props().disabled).toBe(true)
  })
})
