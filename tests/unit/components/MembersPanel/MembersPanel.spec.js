import { shallowMount } from '@vue/test-utils'
import MembersPanel from '@/components/MembersPanel'

import TipeCard from '@/components/Card'

describe('MembersPanel.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MembersPanel, {
      propsData: {
        members
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the TipeCard component', () => {
    const wrapper = shallowMount(MembersPanel, {
      propsData: {
        members
      }
    })
    expect(wrapper.contains(TipeCard)).toBe(true)
  })
})

const members = [
  {
    id: '84f1a8ca-980d-4166-a227-35c94877a',
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: 'Garnett',
    lastName: 'Koch',
    email: 'Hank_Zemlak@hotmail.com',
    role: { name: 'Owner' },
    status: 'Offline',
    updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
  },
  {
    id: '84f1a8ca-0d-4166-a227-35c945f0877a',
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: 'Garnett',
    lastName: 'Koch',
    email: 'Hank_Zemlak@hotmail.com',
    role: { name: 'Owner' },
    status: 'Offline',
    updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
  },
  {
    id: '84f1a8ca-980d-4166-35c945f0877a',
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: 'Garnett',
    lastName: 'Koch',
    email: 'Hank_Zemlak@hotmail.com',
    role: { name: 'Owner' },
    status: 'Offline',
    updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
  },
  {
    id: '84f1a8ca-980d-4166-a227-35c9',
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: 'Garnett',
    lastName: 'Koch',
    email: 'Hank_Zemlak@hotmail.com',
    role: { name: 'Owner' },
    status: 'Offline',
    updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
  },
  {
    id: '980d-4166-a227-35c945f0877a',
    profileImageUrl: 'http://placekitten.com/g/200/300',
    firstName: 'Garnett',
    lastName: 'Koch',
    email: 'Hank_Zemlak@hotmail.com',
    role: { name: 'Owner' },
    status: 'Offline',
    updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
  }
]
