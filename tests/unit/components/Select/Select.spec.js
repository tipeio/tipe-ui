import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TipeSelect from '@/components/Select/SelectUnderline'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]

const props = {
  options
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
    expect(wrapper.attributes()['data-tipe-ui']).toBe('SelectUnderline')
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
    expect(wrapper.props().options).toBe(options)
    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.props().placeholder).toBe('Select a role')
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
        placeholder: 'select a role'
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
  it('should emit keyup', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.vm.$emit('keyup')
    expect(wrapper.emitted().keyup).toBeTruthy()
  })
  it('should change active index on key down', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: true, activeIndex: -1 })
    wrapper.vm.keydown()
    expect(wrapper.vm.activeIndex).toBe(0)
  })
  it('should loop back to the top on keydown of last option', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: true, activeIndex: 1 })
    wrapper.vm.keydown()
    expect(wrapper.vm.activeIndex).toBe(0)
  })
  it('should change active index on key up', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: true, activeIndex: 1 })
    wrapper.vm.keyup()
    expect(wrapper.vm.activeIndex).toBe(0)
  })
  it('should loop to the bottom on keyup of first option', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: true, activeIndex: 0 })
    wrapper.vm.keydown()
    expect(wrapper.vm.activeIndex).toBe(1)
  })
  it('should open the dropdown on enter', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: false, activeIndex: -1 })
    wrapper.vm.enter()
    expect(wrapper.vm.open).toBe(true)
  })
  it('should select option on enter', () => {
    const wrapper = shallowMount(TipeSelect, {
      propsData: {
        ...props
      }
    })
    wrapper.setData({ open: true, activeIndex: 0 })
    wrapper.vm.enter()
    expect(wrapper.vm.open).toBe(false)
    expect(wrapper.vm.selectedValue).toEqual({ label: 'Owner', value: 'owner' })
    expect(wrapper.vm.activeIndex).toBe(-1)
  })
  it('renders without options', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSelect)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
