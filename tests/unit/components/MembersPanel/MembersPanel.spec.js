import { shallowMount } from '@vue/test-utils'
import MembersPanel from '@/components/MembersPanel'

import LayoutCard from '@/components/LayoutCard'

describe('Table.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MembersPanel)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render the LayoutCard component', () => {
    const wrapper = shallowMount(MembersPanel)
    expect(wrapper.contains(LayoutCard)).toBe(true)
  })
  it('should emit the modal method', () => {
    const wrapper = shallowMount(MembersPanel)
    wrapper.vm.$emit('modal')
    expect(wrapper.emitted().modal).toBeTruthy()
  })
  it('should have modalOpen set to false', () => {
    const wrapper = shallowMount(MembersPanel)
    expect(wrapper.vm.modalOpen).toBe(false)
  })
})
