import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import FileIcon from '@/components/Finder/FileIcon'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import FileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'
import { mocks } from '@tipe/tipe-test-utils'

describe('FileIcon', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { file: { type: 'document', label: 'test' } }
      const wrapper = shallowMount(FileIcon, { propsData })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe(':props', () => {
    it(':type(default) - should render FileIconRectangle component', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.contains(FileIconRectangle)).toEqual(true)
    })

    it(':type(square) - should render FileIconSquare component', () => {
      const propsData = { file: mocks.file(), type: 'square' }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.contains(FileIconSquare)).toEqual(true)
    })

    it(':type(default), :file - should pass file to FileIconRectangle component', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconRectangle).props().file).toEqual(
        propsData.file
      )
    })

    it(':type(square), :file - should pass file to FileIconSquare component', () => {
      const propsData = { file: mocks.file(), type: 'square' }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconSquare).props().file).toEqual(propsData.file)
    })
  })
})
