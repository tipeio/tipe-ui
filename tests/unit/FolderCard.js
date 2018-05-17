import { shallowMount } from '@vue/test-utils'
import FolderCard from '@/components/FolderCard.vue'

describe('FolderCard.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(FolderCard)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(FolderCard)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('card')
  })
})
