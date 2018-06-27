import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SelectDropdown from '@/components/Select/SelectDropdown'

const props = {
  options: [
    { label: 'Owner', value: 'owner' },
    { label: 'Admin', value: 'admin' }
  ],
  activeIndex: 1,
  size: 'large'
}
describe('SelectDropdown.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: { ...props }
    })
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: { ...props }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelectDropdown')
  })
  it('has dropdown class', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: { ...props }
    })
    expect(wrapper.classes()).toContain('dropdown')
  })
  it('has the correct size class', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: { ...props }
    })
    expect(wrapper.classes()).toContain('large')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.props().options).toBe(props.options)
    expect(wrapper.props().activeIndex).toBe(1)
    expect(wrapper.props().size).toBe('large')
  })
  it('should have the correct number of divs', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: {
        ...props
      }
    })
    const divArr = wrapper.findAll('.dropdown-item')
    expect(divArr).toHaveLength(2)
  })
  it('should have the active class on the second div', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: {
        ...props
      }
    })
    const item = wrapper.findAll('.dropdown-item').at(1)
    expect(item.classes()).toContain('active')
  })
  it('should emit change event', () => {
    const wrapper = shallowMount(SelectDropdown, {
      propsData: {
        ...props
      }
    })
    const itemArr = wrapper.findAll('.dropdown-item')
    itemArr.trigger('click')
    expect(wrapper.emitted().change).toBeTruthy()
  })
})
