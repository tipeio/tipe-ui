import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeInput from '@/components/Input'

const props = {
  placeholder: 'Type your name here',
  label: 'Name',
  type: 'text',
  value: ''
}

describe('TipeSelect.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeInput, {
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
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeInput')
  })
  it('should render with the input-flex class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toContain('input-flex')
  })
  it('should not have any input state classes eg. success', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toEqual(['input-flex', 'normal'])
  })
  it('should have the normal class by default', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toContain('normal')
  })
  it('should have the large class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('large')
  })
  it('should have success class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        status: 'success'
      }
    })
    expect(wrapper.classes()).toContain('success')
  })
  it('should not have success class for unchanged input', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).not.toContain('success')
  })
  it('should have error class', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        status: 'error'
      }
    })
    expect(wrapper.classes()).toContain('error')
  })
  it('should not have error class for unchanged input', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).not.toContain('error')
  })
  it('should not render a message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should not render a message with empty string message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        message: ''
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should have a message', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        message: 'can you even fill out a form bro?'
      }
    })
    expect(wrapper.find('.message').exists()).toBe(true)
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props,
        status: 'warning',
        disabled: true,
        size: 'large',
        message: 'can you even fill out a form bro?',
        value: 'olivia@tipe.io'
      }
    })
    expect(wrapper.props().placeholder).toBe(props.placeholder)
    expect(wrapper.props().label).toBe(props.label)
    expect(wrapper.props().value).toBe('olivia@tipe.io')
    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.props().size).toBe('large')
    expect(wrapper.props().type).toBe('text')
    expect(wrapper.props().message).toBe('can you even fill out a form bro?')
    expect(wrapper.props().status).toBe('warning')
  })
  it('should emit onChange method', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('onChange')
    expect(wrapper.emitted().onChange).toBeTruthy()
  })
  it('should emit onFocus method', () => {
    const wrapper = shallowMount(TipeInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('onFocus')
    expect(wrapper.emitted().onFocus).toBeTruthy()
  })
})
