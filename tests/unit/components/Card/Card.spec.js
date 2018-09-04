import { shallowMount } from '@vue/test-utils'
import TipeCard from '@/components/Card'

describe('Card.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(TipeCard)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(TipeCard)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('card')
  })
})
