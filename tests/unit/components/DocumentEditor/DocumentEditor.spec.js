import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentEditor from '@/components/DocumentEditor'
import documentBlockFixture from '@/fixtures/DocumentBlock'
import documentBlockMock from '@/mocks/DocumentBlock'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { block: documentBlockFixture() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { block: documentBlockMock() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentEditor')
    })
  })
})
