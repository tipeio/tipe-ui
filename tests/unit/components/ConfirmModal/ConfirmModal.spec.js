import { shallowMount } from '@vue/test-utils'
import ConfirmModal from '@/components/ConfirmModal'
import { createRenderer } from 'vue-server-renderer'

import TipeIcon from '@/components/Icon'
import TipeButton from '@/components/Button'
import TipeSeperator from '@/components/Seperator'

const props = {
  title: 'I am the title',
  subtitle: 'I am the subtitle',
  buttonText: 'Delete'
}
describe('AddMember.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(ConfirmModal, {
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
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeConfirmModal')
  })
  it('should render the TipeIcon component', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.contains(TipeIcon)).toBe(true)
  })
  it('should render the TipeButton component', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    const buttons = wrapper.findAll(TipeButton)
    expect(buttons).toHaveLength(2)
  })
  it('should render the TipeSeperator component', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.contains(TipeSeperator)).toBe(true)
  })
  it('should have the grid class', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toContain('grid')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.props().title).toBe(props.title)
    expect(wrapper.props().subtitle).toBe(props.subtitle)
    expect(wrapper.props().buttonText).toBe(props.buttonText)
  })
  it('should emit the close method', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('close')
    expect(wrapper.emitted().close).toBeTruthy()
  })
  it('should emit the action method', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('action')
    expect(wrapper.emitted().action).toBeTruthy()
  })
  it('should emit the cancel method', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('cancel')
    expect(wrapper.emitted().cancel).toBeTruthy()
  })
})
