import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import { mocks, fixtures } from '@tipe/tipe-test-utils'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { block: fixtures.documentBlock() }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { block: mocks.documentBlock() }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentBlock')
    })
  })

  describe(':props', () => {
    it(':status(undefined) - no status class ', () => {
      const propsData = { block: mocks.documentBlock() }
      delete propsData.block.status
      const wrapper = shallowMount(DocumentBlock, { propsData })
      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining([expect.stringMatching(/status-/)])
      )
    })

    it(':status(success) - has status-success class', () => {
      const propsData = { block: mocks.documentBlock({ status: 'success' }) }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-success')
    })

    it(':status(error) - has status-error class', () => {
      const propsData = { block: mocks.documentBlock({ status: 'error' }) }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':status(warning) - has status-warning class', () => {
      const propsData = { block: mocks.documentBlock({ status: 'error' }) }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':waiting(false) - no waiting class', () => {
      const propsData = { block: mocks.documentBlock({ waiting: false }) }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['waiting']))
    })

    it(':waiting(true) - has waiting class', () => {
      const propsData = { block: mocks.documentBlock({ waiting: true }) }
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('waiting')
    })
  })
})
