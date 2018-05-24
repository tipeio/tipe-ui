import { shallowMount } from '@vue/test-utils'
import ActivityItem from '@/components/AccountSettings/RecentActivity/ActivityItem.vue'

describe('ActivityItem.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ActivityItem)
    expect(wrapper).toMatchSnapshot()
  })
})
