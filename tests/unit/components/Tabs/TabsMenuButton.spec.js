import { shallowMount } from '@vue/test-utils'
import TabsMenuButton from '@/components/Tabs/TabsMenuButton.vue'
import Icon from '@/components/Icon'
import faker from 'faker'

describe('TabsMenuButton', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(TabsMenuButton)

      expect(wrapper).toMatchSnapshot()
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TabsMenuButton)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTabsMenuButton')
    })

    it('<root> - should be button tag', () => {
      const wrapper = shallowMount(TabsMenuButton)

      expect(wrapper.is('button')).toBe(true)
    })
  })

  describe(':props', () => {
    it(':icon - should pass icon prop to the Icon component', () => {
      const propsData = { icon: faker.lorem.word() }
      const wrapper = shallowMount(TabsMenuButton, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual(propsData.icon)
    })

    it(':label - should be rendered', () => {
      const propsData = { label: faker.lorem.word() }
      const wrapper = shallowMount(TabsMenuButton, { propsData })

      expect(wrapper.text()).toBe(propsData.label)
    })

    it(':active(fasle) - should not render active class', () => {
      const propsData = { active: false }
      const wrapper = shallowMount(TabsMenuButton, { propsData })

      expect(wrapper.classes()).not.toContain('active')
    })

    it(':active(true) - should render active class', () => {
      const propsData = { active: true }
      const wrapper = shallowMount(TabsMenuButton, { propsData })

      expect(wrapper.classes()).toContain('active')
    })
  })

  describe('@events', () => {
    it('@click - should emit click event', () => {
      const wrapper = shallowMount(TabsMenuButton)

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
