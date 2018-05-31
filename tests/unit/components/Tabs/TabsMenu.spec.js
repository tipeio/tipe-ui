import { shallowMount } from '@vue/test-utils'
import TabsMenu from '@/components/Tabs/TabsMenu.vue'
import TabsMenuButton from '@/components/Tabs/TabsMenuButton.vue'
import tabsMenuButtonMock from '@/mocks/TabsMenuButton'
import createManyMocks from '@/mocks/createManyMocks'

describe('TabsMenu', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(TabsMenu)

      expect(wrapper).toMatchSnapshot()
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TabsMenu)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTabsMenu')
    })
  })

  describe(':props', () => {
    it(':buttons - renders a TabsMenuButton component for each button', () => {
      const propsData = { buttons: createManyMocks(tabsMenuButtonMock, 3) }
      const wrapper = shallowMount(TabsMenu, { propsData })

      expect(wrapper.findAll(TabsMenuButton)).toHaveLength(3)
    })

    it(':buttons.label - should pass label prop to TabsMenuButton component', () => {
      const propsData = { buttons: [tabsMenuButtonMock()] }
      const wrapper = shallowMount(TabsMenu, { propsData })

      expect(wrapper.find(TabsMenuButton).props().label).toEqual(
        propsData.buttons[0].label
      )
    })

    it(':buttons.icon - should pass icon prop to TabsMenuButton component', () => {
      const propsData = { buttons: [tabsMenuButtonMock()] }
      const wrapper = shallowMount(TabsMenu, { propsData })

      expect(wrapper.find(TabsMenuButton).props().icon).toEqual(
        propsData.buttons[0].icon
      )
    })

    it(':buttons.active - should pass active prop to TabsMenuButton component', () => {
      const propsData = { buttons: [tabsMenuButtonMock()] }
      const wrapper = shallowMount(TabsMenu, { propsData })

      expect(wrapper.find(TabsMenuButton).props().active).toEqual(
        propsData.buttons[0].active
      )
    })
  })
})
