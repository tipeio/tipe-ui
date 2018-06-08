import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeSelect from '@/components/Select'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]

describe('TipeSelect.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
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
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelect')
  })
  it('should render with the select-flex class', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    expect(wrapper.classes()).toContain('select-flex')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    expect(wrapper.props().textLabel).toBe('Role')
    expect(wrapper.props().options).toBe(options)
    expect(wrapper.props().value).toBe('member')
  })
  it('should have the correct label', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    const label = wrapper.find('label')
    expect(label.text()).toBe('Role')
  })
  it('should have the correct number of option tags', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    const optionArr = wrapper.findAll('option')
    expect(optionArr).toHaveLength(2)
  })
  it('should not render toggle dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })
  it('should render the dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(true)
  })
  it('should toggle the dropdown', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(true)
    wrapper.trigger('click')
    expect(wrapper.find('.dropdown').exists()).toBe(false)
  })
  it('should emit onChange method', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    wrapper.vm.$emit('onChange')
    expect(wrapper.emitted().onChange).toBeTruthy()
  })
  it('should emit onClick method', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        textLabel: 'Role',
        options,
        value: 'member'
      }
    })
    wrapper.vm.$emit('onClick')
    expect(wrapper.emitted().onClick).toBeTruthy()
  })
})
