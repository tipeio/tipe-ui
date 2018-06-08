import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeSelect from '@/components/Select'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]

const props = {
  label: 'Role',
  options,
  value: { label: 'Admin', value: 'admin' }
}
describe('TipeSelect.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSelect, {
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
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelect')
  })
  it('should render with the select-flex class', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.classes()).toContain('select-flex')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props,
        disabled: true,
        placeholder: 'Select a role'
      }
    })
    expect(wrapper.props().label).toBe('Role')
    expect(wrapper.props().options).toBe(options)
    expect(wrapper.props().value).toEqual({ label: 'Admin', value: 'admin' })
    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.props().placeholder).toBe('Select a role')
  })
  it('should have the correct label', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    const label = wrapper.find('label')
    expect(label.text()).toBe('Role')
  })
  it('should have the correct number of option tags', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    const optionArr = wrapper.findAll('option')
    expect(optionArr).toHaveLength(2)
  })
  it('should have the placeholder', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props,
        placeholder: 'select a role',
        value: { label: '', value: '' }
      }
    })
    const optionArr = wrapper.findAll('option')
    expect(optionArr).toHaveLength(3)
  })
  it('should not render toggle dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })
  it('should render the dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    const Select = wrapper.find('select')
    Select.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(true)
  })
  it('should toggle the dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    const Select = wrapper.find('select')
    Select.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(true)
    Select.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })
  it('should emit onChange method', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('onChange')
    expect(wrapper.emitted().onChange).toBeTruthy()
  })
  it('should emit onClick method', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('onClick')
    expect(wrapper.emitted().onClick).toBeTruthy()
  })
})
