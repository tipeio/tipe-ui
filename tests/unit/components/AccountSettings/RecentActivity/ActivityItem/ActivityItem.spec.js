import { shallowMount } from '@vue/test-utils'
import { ActivityItem } from '@/components/AccountSettings/RecentActivity'
import Icon from '@/components/Icon'

describe('ActivityItem.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(ActivityItem, {
      propsData: {
        item: {
          title: 'Olivia broke all of the code',
          subtitle: 'about a minute ago'
        }
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should contain the item class', () => {
    const wrapper = shallowMount(ActivityItem, {
      propsData: {
        item: {
          title: 'Olivia broke all of the code',
          subtitle: 'about a minute ago'
        }
      }
    })
    expect(wrapper.classes()).toContain('item')
  })
  it('should have the correct item prop', () => {
    const wrapper = shallowMount(ActivityItem, {
      propsData: {
        item: {
          title: 'Olivia broke all of the code',
          subtitle: 'about a minute ago'
        }
      }
    })
    expect(wrapper.props().item).toEqual({
      title: 'Olivia broke all of the code',
      subtitle: 'about a minute ago'
    })
  })
  it('should contain the icon component', () => {
    const wrapper = shallowMount(ActivityItem, {
      propsData: {
        item: {
          title: 'Olivia broke all of the code',
          subtitle: 'about a minute ago'
        }
      }
    })
    expect(wrapper.contains(Icon)).toBe(true)
  })
})
