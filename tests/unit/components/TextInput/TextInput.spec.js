import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeTextInput from '@/components/TextInput'

const props = {
  placeholder: 'Type your name here',
  label: 'Name',
  value: '',
  name: 'name'
}

describe('TipeSelect.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeTextInput, {
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
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTextInput')
  })
  it('should render with the medium class by default', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toContain('medium')
  })
  it('should not have any input state classes eg. success by default', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toEqual(['medium'])
  })
  it('should have the large class', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props,
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('large')
  })
  it('should have success class', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props,
        status: 'success'
      }
    })
    expect(wrapper.classes()).toContain('success')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props,
        status: 'warning',
        disabled: true,
        size: 'small',
        value: 'olivia@tipe.io',
        tabindex: 0,
        waiting: false
      }
    })
    expect(wrapper.props().placeholder).toBe(props.placeholder)
    expect(wrapper.props().label).toBe(props.label)
    expect(wrapper.props().value).toBe('olivia@tipe.io')
    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.props().waiting).toBe(false)
    expect(wrapper.props().size).toBe('small')
    expect(wrapper.props().name).toBe('name')
    expect(wrapper.props().status).toBe('warning')
    expect(wrapper.props().tabindex).toBe(0)
  })
  it('should emit change', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('change')
    expect(wrapper.emitted().change).toBeTruthy()
  })
  it('should emit focus', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('focus')
    expect(wrapper.emitted().focus).toBeTruthy()
  })
  it('should emit blur', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('blur')
    expect(wrapper.emitted().blur).toBeTruthy()
  })
  it('should emit click', () => {
    const wrapper = shallowMount(TipeTextInput, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
