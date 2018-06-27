import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentEditor from '@/components/DocumentEditor'
import documentFixture from '@/fixtures/Document'
import documentMock from '@/mocks/Document'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { document: documentFixture() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { document: documentMock() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentEditor')
    })
  })
})
