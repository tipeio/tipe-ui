import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import FinderViewer from '@/components/Finder/FinderViewer'
import TipeFileIcon from '@/components/Finder/FileIcon'
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
    it(':file - should pass file to FileIcon component', () => {
      const propsData = { files: [mocks.file()] }
      const wrapper = shallowMount(FinderViewer, { propsData })

      expect(wrapper.find(TipeFileIcon).props().file).toMatchObject(
        propsData.files[0]
      )
    })

    it(':layout(grid) - should pass layout prop to layout class', () => {
      const propsData = { layout: 'grid' }
      const wrapper = shallowMount(FinderViewer, { propsData })

      expect(wrapper.find('.layout').classes()).toContain('grid-rectangle')
    })

    it(':picker - should pass to FileIcon component', () => {
      const propsData = { picker: true, files: [mocks.file()] }
      const wrapper = shallowMount(FinderViewer, { propsData })

      expect(wrapper.find(TipeFileIcon).props().picker).toEqual(
        propsData.picker
      )
    })
  })
})
