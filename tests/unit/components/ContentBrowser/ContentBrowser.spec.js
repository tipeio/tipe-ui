import { shallowMount } from '@vue/test-utils'
import ContentBrowser from '@/components/ContentBrowser'
import Breadcrumbs from '@/components/Breadcrumbs'
import Finder from '@/components/Finder'
import linkMock from '@/mocks/Link'
import fileMock from '@/mocks/File'

describe('ContentBrowser', () => {
  describe('<ContentBrowser>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(ContentBrowser)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(ContentBrowser)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeContentBrowser')
    })
  })

  describe(':props', () => {
    it(':breadcrumbsLinks - should pass breadcrumbsLinks prop to the Breadcrumbs component', () => {
      const propsData = { breadcrumbLinks: [linkMock()] }
      const wrapper = shallowMount(ContentBrowser, { propsData })

      expect(wrapper.find(Breadcrumbs).props().links).toEqual(
        propsData.breadcrumbLinks
      )
    })

    it(':documents - should pass folders prop to the first Finder component', () => {
      const propsData = { folders: [fileMock({ type: 'folder' })] }
      const wrapper = shallowMount(ContentBrowser, { propsData })

      expect(
        wrapper
          .findAll(Finder)
          .at(0)
          .props().files
      ).toEqual(propsData.folders)
    })

    it(':documents - should pass documents prop to the second Finder component', () => {
      const propsData = { documents: [fileMock({ type: 'document' })] }
      const wrapper = shallowMount(ContentBrowser, { propsData })

      expect(
        wrapper
          .findAll(Finder)
          .at(1)
          .props().files
      ).toEqual(propsData.documents)
    })
  })
})
