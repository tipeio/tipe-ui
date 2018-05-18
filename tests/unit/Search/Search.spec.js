import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'
import Icon from '@/components/Icon'

describe('Search', () => {
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(Search)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSearch')
  })

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
