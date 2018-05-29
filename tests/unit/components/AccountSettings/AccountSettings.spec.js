import { shallowMount } from '@vue/test-utils'
import AccountSettings from '@/components/AccountSettings'
import RecentActivity from '@/components/AccountSettings/RecentActivity'
import Settings from '@/components/AccountSettings/Settings'
import IconBadge from '@/components/IconBadge'
import Progress from '@/components/Progress'

describe('Settings.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper).toMatchSnapshot()
  })
  it('should have the pannel content class', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper.classes()).toContain('panel-content')
  })
  it('should render the icon badge component', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper.contains(IconBadge)).toBe(true)
  })
  it('should render the progress component', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper.contains(Progress)).toBe(true)
  })
  it('should render the recent activity component', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper.contains(RecentActivity)).toBe(true)
  })
  it('should render the settings component', () => {
    const wrapper = shallowMount(AccountSettings)
    expect(wrapper.contains(Settings)).toBe(true)
  })
})
