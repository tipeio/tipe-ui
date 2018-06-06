import { shallowMount } from '@vue/test-utils'
import TipeInput from '@/components/Input'

const textPlaceholder = 'Type your name here'
const textLabel = 'Name'

const props = {
  textPlaceholder,
  textLabel
}

describe('TipeSelect.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false }
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with the input-flex class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false }
      }
    })
    expect(wrapper.classes()).toContain('input-flex')
  })
  it('should not have any input state classes eg. success', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false }
      }
    })
    expect(wrapper.classes()).toHaveLength(1)
  })
  it('should have success class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: 'olivia', changed: true },
        validity: {
          valid: true,
          status: 'success',
          message: ''
        }
      }
    })
    expect(wrapper.classes()).toContain('success')
  })
  it('should not have success class for unchanged input', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false },
        validity: {
          valid: true,
          status: 'success',
          message: ''
        }
      }
    })
    expect(wrapper.classes()).not.toContain('success')
  })
  it('should have error class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: true },
        validity: {
          valid: false,
          status: 'error',
          message: ''
        }
      }
    })
    expect(wrapper.classes()).toContain('error')
  })
  it('should not have error class for unchanged input', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false },
        validity: {
          valid: false,
          status: 'error',
          message: ''
        }
      }
    })
    expect(wrapper.classes()).not.toContain('error')
  })
  it('should not render a message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false }
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should not render a message with empty string message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: true },
        validity: {
          valid: true,
          status: 'success',
          message: ''
        }
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should have a message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: true },
        validity: {
          valid: false,
          status: 'error',
          message: 'can you even fill out a form bro?'
        }
      }
    })
    expect(wrapper.find('.message').exists()).toBe(true)
  })
  it('should have the correct props', () => {
    const value = { value: '', changed: true }
    const validity = {
      valid: false,
      status: 'error',
      message: 'can you even fill out a form bro?'
    }
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value,
        validity
      }
    })
    expect(wrapper.props().textPlaceholder).toBe(textPlaceholder)
    expect(wrapper.props().textLabel).toBe(textLabel)
    expect(wrapper.props().value).toBe(value)
    expect(wrapper.props().validity).toBe(validity)
  })
  it('should emit onChange method', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        value: { value: '', changed: false }
      }
    })
    wrapper.vm.$emit('onChange')
    expect(wrapper.emitted().onChange).toBeTruthy()
  })
})
