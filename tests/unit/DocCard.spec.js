import { shallowMount } from '@vue/test-utils'
import DocCard from '@/components/DocCard.vue'

describe('DocCard.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(DocCard)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(DocCard)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('card')
  })
})
