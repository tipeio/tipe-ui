import { shallowMount } from '@vue/test-utils'
import Topbar from '@/components/Topbar'

describe('Topbar', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Topbar)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Topbar)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTopbar')
    })
  })
})
