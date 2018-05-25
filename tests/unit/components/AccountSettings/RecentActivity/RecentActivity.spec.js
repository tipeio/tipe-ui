import { shallowMount } from '@vue/test-utils'
import RecentActivity, {
  ActivityItem
} from '@/components/AccountSettings/RecentActivity'
import Accordian from '@/components/Accordian'

describe('RecentActivity.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(RecentActivity)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the accordian component', () => {
    const wrapper = shallowMount(RecentActivity)
    expect(wrapper.contains(Accordian)).toBe(true)
  })
  it('should render the activity item component', () => {
    const wrapper = shallowMount(RecentActivity)
    expect(wrapper.contains(ActivityItem)).toBe(true)
  })
})
