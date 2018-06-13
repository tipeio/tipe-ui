import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeField from '@/components/Field'
import TipeTextInput from '@/components/TextInput'

const props = {
  name: 'name',
  label: 'Name',
  field: {
    label: 'first name',
    placeholder: 'what is your first name?',
    value: '',
    size: 'small'
  }
}

describe('TipeField.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeField')
  })
  it('should render with no classes by default ie. no status classes', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.classes()).toEqual([])
  })
  it('should have success class', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        status: 'success'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.classes()).toContain('success')
  })
  it('should have error class', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        status: 'error'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.classes()).toContain('error')
  })
  it('should have warning class', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        status: 'warning'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.classes()).toContain('warning')
  })
  it('should not render a message', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should not render a message with empty string message', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        successMessage: '',
        status: 'success'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.find('.message').exists()).toBe(false)
  })
  it('should have a message', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        errorMessage: 'can you even fill out a form bro?',
        status: 'error'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.find('.message').exists()).toBe(true)
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props,
        status: 'warning',
        errorMessage: 'can you even fill out a form bro?',
        successMessage: 'woot woot!',
        warningMessage: 'watch out'
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    expect(wrapper.props().label).toBe(props.label)
    expect(wrapper.props().name).toBe(props.name)
    expect(wrapper.props().field).toBe(props.field)
    expect(wrapper.props().status).toBe('warning')
    expect(wrapper.props().errorMessage).toBe(
      'can you even fill out a form bro?'
    )
    expect(wrapper.props().successMessage).toBe('woot woot!')
    expect(wrapper.props().warningMessage).toBe('watch out')
  })
  it('should emit change', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    wrapper.vm.$emit('change')
    expect(wrapper.emitted().change).toBeTruthy()
  })
  it('should emit blur', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    wrapper.vm.$emit('blur')
    expect(wrapper.emitted().blur).toBeTruthy()
  })
  it('should emit click', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
  it('should emit focus', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput]
      }
    })
    wrapper.vm.$emit('focus')
    expect(wrapper.emitted().focus).toBeTruthy()
  })
  it.skip('should not break with no slots', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('focus')
    expect(wrapper.emitted().focus).toBeTruthy()
  })
  it.skip('should work with multiple slots', () => {
    const wrapper = shallowMount(TipeField, {
      propsData: {
        ...props
      },
      slots: {
        default: [TipeTextInput, TipeTextInput]
      }
    })
    wrapper.vm.$emit('focus')
    expect(wrapper.emitted().focus).toBeTruthy()
  })
})
