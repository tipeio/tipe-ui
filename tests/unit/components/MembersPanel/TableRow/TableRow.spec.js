import { shallowMount } from '@vue/test-utils'
import { TableRow } from '@/components/MembersPanel'
import { createManyMocks, user } from '../../../../../src/mocks'

const member = () => createManyMocks(user, 1)

describe('TableRow.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        member: member()[0]
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
