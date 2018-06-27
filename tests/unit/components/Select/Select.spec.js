import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Select from '@/components/Select'
import TipeSelectButton from '@/components/Select/SelectButton'
import TipeSelectUnderline from '@/components/Select/SelectUnderline'

const props = {
  options: [
    { label: 'Owner', value: 'owner' },
    { label: 'Admin', value: 'admin' }
  ],
  placeholder: 'testing',
  color: 'primary'
}

describe('Select.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(Select)
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(Select)
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelect')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        ...props,
        type: 'button',
        defaultSelected: { label: 'Owner', value: 'owner' }
      }
    })
    expect(wrapper.props().options).toBe(props.options)
    expect(wrapper.props().type).toBe('button')
    expect(wrapper.props().placeholder).toBe(props.placeholder)
    expect(wrapper.props().color).toBe(props.color)
    expect(wrapper.props().defaultSelected).toEqual({
      label: 'Owner',
      value: 'owner'
    })
  })
  it('should contain the TipeSelectUnderline component', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.contains(TipeSelectUnderline)).toBeTruthy()
  })
  it('should contain the TipeSelectButton component', () => {
    const wrapper = shallowMount(Select, {
      propsData: {
        ...props,
        type: 'button'
      }
    })
    expect(wrapper.contains(TipeSelectButton)).toBeTruthy()
  })
})
