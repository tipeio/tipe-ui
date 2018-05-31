import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/Tabs'
import TabsMenu from '@/components/Tabs/TabsMenu.vue'

describe('Tabs', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Tabs)

      expect(wrapper).toMatchSnapshot()
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Tabs)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTabs')
    })

    it('<tipe-tabs-menu> - should render TipeTabsMenu conponent', () => {
      const wrapper = shallowMount(Tabs)

      expect(wrapper.find(TabsMenu).exists()).toBe(true)
    })
  })
})
