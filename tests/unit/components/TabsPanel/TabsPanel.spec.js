import { shallowMount } from '@vue/test-utils'
import TabsPanel from '@/components/TabsPanel'

describe('TabsMenu', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(TabsPanel)

      expect(wrapper).toMatchSnapshot()
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TabsPanel)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTabsPanel')
    })
  })
})
