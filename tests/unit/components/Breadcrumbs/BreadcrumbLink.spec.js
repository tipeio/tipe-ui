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
  })

  describe(':props', () => {
    it(':link.label - should render label', () => {
      const propsData = { ...mocks.link() }
      const wrapper = shallowMount(BreadcrumbLink, { propsData })
      expect(wrapper.text()).toBe(propsData.label)
    })
  })
})
