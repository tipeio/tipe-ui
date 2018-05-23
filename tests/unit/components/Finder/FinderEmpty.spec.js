import { shallowMount } from '@vue/test-utils'
import FinderEmpty from '@/components/Finder/FinderEmpty.vue'

describe('FinderEmpty', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(FinderEmpty)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(FinderEmpty)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFinder')
    })
  })
})
