import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import ContentBrowser from '@/components/ContentBrowser'
import Breadcrumbs from '@/components/Breadcrumbs'
import Finder from '@/components/Finder'
import { mocks } from '@tipe/tipe-test-utils'

describe('ContentBrowser', () => {
  describe('<ContentBrowser>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(ContentBrowser)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(ContentBrowser)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeContentBrowser')
    })
  })

  describe(':props', () => {
    it(':breadcrumbsLinks - should pass breadcrumbsLinks prop to the Breadcrumbs component', () => {
      const propsData = { breadcrumbLinks: [mocks.link()] }
      const wrapper = shallowMount(ContentBrowser, { propsData })

      expect(wrapper.find(Breadcrumbs).props().links).toEqual(
        propsData.breadcrumbLinks
      )
    })

    it(':documents - should pass folders prop to the first Finder component', () => {
      const propsData = { folders: [mocks.file({ type: 'folder' })] }
      const wrapper = shallowMount(ContentBrowser, { propsData })

      expect(
        wrapper
          .findAll(Finder)
          .at(0)
          .props().files
      ).toEqual(propsData.folders)
    })

    it(':documents - should pass documents prop to the second Finder component', () => {
      const propsData = { documents: [mocks.file({ type: 'document' })] }
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
