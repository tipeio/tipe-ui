import { shallowMount, mount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import FinderViewer from '@/components/Finder/FinderViewer'
import FinderIcon from '@/components/Finder/FileIcon'
import Scrollable from '@/components/Scrollable'
import { mocks } from '@tipe/tipe-test-utils'

describe('FinderViewer', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(FinderViewer)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(FinderViewer)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFinder')
    })
  })

  describe(':props', () => {
    it(':files - should pass file to FinderIcon component', () => {
      const stubs = {
        TipeScrollable: Scrollable,
        TipeFileIcon: '<!---->'
      }
      const propsData = { files: [mocks.file()] }
      const wrapper = mount(FinderViewer, { propsData, stubs })

      expect(wrapper.find(FinderIcon).props().file).toMatchObject(
        propsData.files[0]
      )
    })

    it(':layout(grid) - should pass layout prop to layout class', () => {
      const stubs = {
        TipeScrollable: Scrollable,
        TipeFileIcon: '<!---->'
      }
      const propsData = { layout: 'grid' }
      const wrapper = mount(FinderViewer, { propsData, stubs })

      expect(wrapper.find('.layout').classes()).toContain('grid-rectangle')
    })
  })
})
