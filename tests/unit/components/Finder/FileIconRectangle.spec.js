import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import Icon from '@/components/Icon'
import { mocks, fixtures } from '@tipe/tipe-test-utils'

describe('FileIconRectangle', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { file: fixtures.file() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconRectangle')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })

    it(':type(folder) - should pass "folder" to Icon component\'s :icon prop', () => {
      const propsData = { file: mocks.file({ type: 'folder' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('folder-filled')
    })

    it(':type(document) - should pass "file" to Icon component\'s :icon prop', () => {
      const propsData = { file: mocks.file({ type: 'document' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('document-filled')
    })
  })

  describe('@events', () => {
    it('@click - emits', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      wrapper.find('.file-icon').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()

      wrapper.find('.label').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
