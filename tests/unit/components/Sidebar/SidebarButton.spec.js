import { shallowMount } from '@vue/test-utils'
import SidebarButton from '@/components/Sidebar/SidebarButton.vue'
import Icon from '@/components/Icon'
import faker from 'faker'

describe('Sidebar', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(SidebarButton)

      expect(wrapper).toMatchSnapshot()
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(SidebarButton)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSidebarButton')
    })

    it('<root> - should be button tag', () => {
      const wrapper = shallowMount(SidebarButton)

      expect(wrapper.is('button')).toBe(true)
    })

    it('<tipe-icon> - should exist', () => {
      const wrapper = shallowMount(SidebarButton)

      expect(wrapper.find(Icon).exists()).toBe(true)
    })
  })

  describe(':props', () => {
    it(':icon - should be passed to Icon component', () => {
      const propsData = { icon: faker.lorem.word() }
      const wrapper = shallowMount(SidebarButton, { propsData })

      expect(wrapper.find(Icon).props().icon).toBe(propsData.icon)
    })
  })

  describe('@events', () => {
    it('@click - should emit click event', () => {
      const wrapper = shallowMount(SidebarButton)

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
