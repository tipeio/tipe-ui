import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SidebarLink from '@/components/Sidebar/SidebarLink.vue'
import Icon from '@/components/Icon'
import faker from 'faker'

describe('Sidebar', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(SidebarLink)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(SidebarLink)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSidebarLink')
    })

    it('<root> - should be a tag', () => {
      const wrapper = shallowMount(SidebarLink)

      expect(wrapper.is('a')).toBe(true)
    })

    it('<tipe-icon> - should exist', () => {
      const wrapper = shallowMount(SidebarLink)

      expect(wrapper.find(Icon).exists()).toBe(true)
    })
  })

  describe(':props', () => {
    it(':label - should match text', () => {
      const propsData = { label: faker.lorem.words(1) }
      const wrapper = shallowMount(SidebarLink, { propsData })

      expect(wrapper.text()).toBe(propsData.label)
    })

    it(':url - should default to #', () => {
      const wrapper = shallowMount(SidebarLink)

      expect(wrapper.attributes().href).toBe('#')
    })

    it(':url - should match href', () => {
      const propsData = { url: faker.internet.url() }
      const wrapper = shallowMount(SidebarLink, { propsData })

      expect(wrapper.attributes().href).toBe(propsData.url)
    })

    it(':icon - should be passed to Icon component', () => {
      const propsData = { icon: faker.lorem.word() }
      const wrapper = shallowMount(SidebarLink, { propsData })

      expect(wrapper.find(Icon).props().icon).toBe(propsData.icon)
    })

    it(':compressed(false) - should not add compressed class', () => {
      const wrapper = shallowMount(SidebarLink)

      expect(wrapper.classes()).not.toContain('compressed')
    })

    it(':compressed(true) - should add compressed class', () => {
      const propsData = { compressed: true }
      const wrapper = shallowMount(SidebarLink, { propsData })

      expect(wrapper.classes()).toContain('compressed')
    })
  })
})
