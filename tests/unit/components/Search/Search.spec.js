import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

describe('Search', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Search)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Search)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSearch')
    })
  })
})
