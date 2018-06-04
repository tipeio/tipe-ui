import { shallowMount, mount } from '@vue/test-utils'
import { TipeTable, TableRow } from '@/components/MembersPanel'
import TipeScrollble from '@/components/Scrollable'
import { createRenderer } from 'vue-server-renderer'
import Icon from '@/components/Icon'
import Seperator from '@/components/Seperator'

describe('Table.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('should pass the correct members prop', () => {
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    expect(wrapper.props().members).toBe(members)
  })
  it('should contain the table class', () => {
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    expect(wrapper.classes()).toContain('table')
  })
  it('should render the TableRow component', () => {
    const wrapper = mount(TipeTable, {
      propsData: {
        members
      },
      stubs: {
        TipeScrollable: TipeScrollble,
        TableRow: '<!---->',
        Seperator: '<!---->',
        Icon: '<!---->'
      }
    })

    expect(wrapper.contains(TableRow)).toBe(true)
  })
  it('should render the Icon component', () => {
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    expect(wrapper.contains(Icon)).toBe(true)
  })
  it('should render the Seperator component', () => {
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    expect(wrapper.contains(Seperator)).toBe(true)
  })
  it('should emit the sort method', () => {
    const wrapper = shallowMount(TipeTable, {
      propsData: {
        members
      }
    })
    wrapper.vm.$emit('sort', 'status')
    expect(wrapper.emitted().sort).toBeTruthy()
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
