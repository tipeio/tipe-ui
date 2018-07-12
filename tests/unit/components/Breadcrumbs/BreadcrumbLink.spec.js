import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import BreadcrumbLink from '@/components/Breadcrumbs/BreadcrumbLink.vue'
import { mocks } from '@tipe/tipe-test-utils'

describe('BreadcrumbLink', () => {
  describe('<template>', () => {
    it('matches previous snapshot', async () => {
      const wrapper = shallowMount(BreadcrumbLink)
      await expect(
        createRenderer().renderToString(wrapper.vm)
      ).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(BreadcrumbLink)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeBreadcrumbLink')
    })

    it('<a> - should be an anchor tag', () => {
      const wrapper = shallowMount(BreadcrumbLink)

      expect(wrapper.is('a')).toBe(true)
    })
  })

  describe(':props', () => {
    it(':link.label - should render label', () => {
      const propsData = { ...mocks.link() }
      const wrapper = shallowMount(BreadcrumbLink, { propsData })
      expect(wrapper.text()).toBe(propsData.label)
    })

    it(':link.url(empty) - should render # in href', () => {
      const propsData = { ...mocks.link() }
      delete propsData.url
      const wrapper = shallowMount(BreadcrumbLink, { propsData })

      expect(wrapper.attributes().href).toBe('#')
    })

    it(':link.url - should render url in href', () => {
      const propsData = { ...mocks.link() }
      const wrapper = shallowMount(BreadcrumbLink, { propsData })

      expect(wrapper.attributes().href).toBe(propsData.url)
    })
  })
})
