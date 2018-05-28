import { shallowMount } from '@vue/test-utils'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbLink from '@/components/Breadcrumbs/BreadcrumbLink.vue'
import linkMock from '@/mocks/Link'

describe('Breadcrumbs', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Breadcrumbs)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Breadcrumbs)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeBreadcrumbs')
    })

    it('<nav> - should be a nav tag', () => {
      const wrapper = shallowMount(Breadcrumbs)

      expect(wrapper.is('nav')).toBe(true)
    })
  })

  describe(':props', () => {
    it(':links - should render links', () => {
      const propsData = { links: [linkMock(), linkMock()] }
      const wrapper = shallowMount(Breadcrumbs, { propsData })
      const links = wrapper.findAll(BreadcrumbLink)

      expect(links.at(0).props()).toEqual(
        expect.objectContaining(propsData.links[0])
      )

      expect(links.at(1).props()).toEqual(
        expect.objectContaining(propsData.links[1])
      )
    })
  })
})
