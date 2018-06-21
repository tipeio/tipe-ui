import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import DocumentBlockList from '@/components/DocumentEditor/DocumentBlockList'
import documentBlockFixture from '@/fixtures/DocumentBlock'
import documentBlockMock from '@/mocks/DocumentBlock'
import createManyMocks from '@/mocks/createManyMocks'

describe('DocumentBlockList', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = documentBlockFixture()
      const wrapper = shallowMount(DocumentBlockList, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(DocumentBlockList)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentBlockList')
    })
  })

  describe(':props', () => {
    it(':blocks - should render a DocumentBlock components for each block', () => {
      const propsData = { blocks: createManyMocks(documentBlockMock, 3) }
      const wrapper = shallowMount(DocumentBlockList, { propsData })

      expect(wrapper.findAll(DocumentBlock)).toHaveLength(
        propsData.blocks.length
      )
    })

    it(':blocks - should pass block to DocumentBlock component props', () => {
      const propsData = { blocks: createManyMocks(documentBlockMock, 1) }
      const wrapper = shallowMount(DocumentBlockList, { propsData })

      expect(wrapper.find(DocumentBlock).props()).toEqual(propsData.blocks[0])
    })
  })
})
