import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'
import Icon from '@/components/icon.vue'

describe('Search.vue', () => {
  it('has input with type search', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('input[type="search"]').exists()).toBe(true)
  })

  it('has correct placeholder', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()

    expect(
      wrapper.find('input[placeholder="Find everthing..."]').exists()
    ).toBe(true)
  })

  it('has a search icon', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Icon).exists()).toBe(true)
    expect(wrapper.find(Icon).props().icon).toBe('search')
  })
})
