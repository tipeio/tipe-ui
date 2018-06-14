import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import { TableRow } from '@/components/MembersPanel'

import TipeProfileImage from '@/components/ProfileImage'
import TipeButton from '@/components/Button'
import Seperator from '@/components/Seperator'

describe('TableRow.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('should pass the correct member prop', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    expect(wrapper.props().member).toBe(member)
  })
  it('should have the gray class for gray prop', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member,
        gray: true
      }
    })
    const tr = wrapper.find('tr')
    expect(tr.classes()).toContain('gray')
  })
  it('should not contain the gray class', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    const tr = wrapper.find('tr')
    expect(tr.classes()).not.toContain('gray')
  })
  it('should render the TipeProfileImage component', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    expect(wrapper.contains(TipeProfileImage)).toBe(true)
  })
  it('should render the TipeButton component', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    expect(wrapper.contains(TipeButton)).toBe(true)
  })
  it('should render the Seperator component', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    expect(wrapper.contains(Seperator)).toBe(true)
  })
  it('should emit send method', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    wrapper.vm.$emit('send')
    expect(wrapper.emitted().send).toBeTruthy()
  })
  it('should emit delete method', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member
      }
    })
    wrapper.vm.$emit('deleteMember')
    expect(wrapper.emitted().deleteMember).toBeTruthy()
  })
})

const member = {
  id: '84f1a8ca-980d-4166-a227-35c945f0877a',
  profileImageUrl: 'http://placekitten.com/g/200/300',
  firstName: 'Garnett',
  lastName: 'Koch',
  email: 'Hank_Zemlak@hotmail.com',
  role: { name: 'Owner' },
  status: 'Offline',
  updatedAt: 'Thu May 31 2018 22:44:03 GMT-0700 (Pacific Daylight Time)'
}
