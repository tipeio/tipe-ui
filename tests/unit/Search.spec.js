import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()
  })
})
