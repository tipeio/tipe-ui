import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import NativeSelect from '@/components/Select/NativeSelect'

const props = {
  options: [
    { label: 'Owner', value: 'owner' },
    { label: 'Admin', value: 'admin' }
  ]
}
describe('NativeSelect.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(NativeSelect)
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(NativeSelect)
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeNativeSelect')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(NativeSelect, {
      propsData: {
        ...props,
        disabled: true,
        placeholder: 'Select a role',
        selectedValue: { label: 'Owner', value: 'owner' }
      }
    })
    expect(wrapper.props().options).toBe(props.options)
    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.props().placeholder).toBe('Select a role')
    expect(wrapper.props().selectedValue).toEqual({
      label: 'Owner',
      value: 'owner'
    })
  })
  it('should have the correct number of option tags', () => {
    const wrapper = shallowMount(NativeSelect, {
      propsData: {
        ...props
      }
    })
    const optionArr = wrapper.findAll('option')
    expect(optionArr).toHaveLength(2)
  })
  it('should have the correct number of option tags when a placeholder is present', () => {
    const wrapper = shallowMount(NativeSelect, {
      propsData: {
        ...props,
        placeholder: 'Select Something'
      }
    })
    const optionArr = wrapper.findAll('option')
    expect(optionArr).toHaveLength(3)
  })
})
