import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SidebarLink from '@/components/Sidebar/SidebarLink.vue'
import tipeTestUtils from '~/tests/TipeTestUtils'
import Icon from '@/components/Icon'
import faker from 'faker'

describe('Sidebar', () => {
  const stubs = { RouterLink: RouterLinkStub }

  describe('<template>', () => {
    tipeTestUtils.test.snapshot(SidebarLink, { stubs })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(SidebarLink, { stubs })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSidebarLink')
    })

    it('<tipe-icon> - should exist', () => {
      const wrapper = shallowMount(SidebarLink, { stubs })

      expect(wrapper.find(Icon).exists()).toBe(true)
    })
  })

  describe(':props', () => {
    it(':url - should default to #', () => {
      const wrapper = shallowMount(SidebarLink, { stubs })

      expect(wrapper.find(RouterLinkStub).props().to).toBe('#')
    })

    it(':url - should match href', () => {
      const propsData = { url: faker.internet.url() }
      const wrapper = shallowMount(SidebarLink, { propsData, stubs })

      expect(wrapper.find(RouterLinkStub).props().to).toBe(propsData.url)
    })

    it(':icon - should be passed to Icon component', () => {
      const propsData = { icon: faker.lorem.word() }
      const wrapper = shallowMount(SidebarLink, { propsData, stubs })

      expect(wrapper.find(Icon).props().icon).toBe(propsData.icon)
    })
  })
})
