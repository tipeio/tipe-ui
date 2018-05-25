import { shallowMount } from '@vue/test-utils'
import Settings from '@/components/AccountSettings/Settings'
import Accordian from '@/components/Accordian'

describe('Settings.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Settings)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the accordian component', () => {
    const wrapper = shallowMount(Settings)
    expect(wrapper.contains(Accordian)).toBe(true)
  })
})
