import { shallowMount } from '@vue/test-utils'
import DocumentEditor from '@/components/DocumentEditor'
import { mocks, fixtures } from '@tipe/tipe-test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(DocumentEditor, {
      propsData: { document: fixtures.document() }
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { document: mocks.document() }
      const wrapper = shallowMount(DocumentEditor, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentEditor')
    })
  })
})
