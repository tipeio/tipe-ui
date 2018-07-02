import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import Icon from '@/components/Icon'
import fileMock from '@/mocks/File'
import fileFixture from '@/fixtures/File'

describe('FileIconRectangle', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { file: fileFixture() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconRectangle')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })

    it(':type(folder) - should pass "folder" to Icon component\'s :icon prop', () => {
      const propsData = { file: fileMock({ type: 'folder' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('folder')
    })

    it(':type(document) - should pass "file" to Icon component\'s :icon prop', () => {
      const propsData = { file: fileMock({ type: 'document' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('file')
    })
  })
})
