import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentEditor from '@/components/DocumentEditor'
import { mocks, fixtures } from '@tipe/tipe-test-utils'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { document: fixtures.document() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { document: mocks.document() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentEditor')
    })
  })
})
