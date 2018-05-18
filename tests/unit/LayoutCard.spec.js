import { shallowMount } from '@vue/test-utils'
import LayoutCard from '@/components/LayoutCard.vue'

describe('LayoutCard.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(LayoutCard)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(LayoutCard)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('card')
  })
})
