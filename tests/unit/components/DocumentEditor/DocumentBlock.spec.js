import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import DocumentBlockNameInput from '@/components/DocumentEditor/DocumentBlock/DocumentBlockNameInput'
import DocumentBlockValueInputStub from '../../stubs/DocumentBlockValueInputStub'
import documentBlockFixture from '@/fixtures/DocumentBlock'
import documentBlockMock from '@/mocks/DocumentBlock'
import faker from 'faker'

describe('DocumentBlock', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = documentBlockFixture()
      const wrapper = shallowMount(DocumentBlock, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = documentBlockMock()
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDocumentBlock')
    })

    it('contains a DocumentBlockNameInput component', () => {
      const propsData = documentBlockMock()
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.contains(DocumentBlockNameInput)).toEqual(true)
    })
  })

  describe(':props', () => {
    it(':name - should pass name to DocumentBlockNameInput component value prop', () => {
      const propsData = documentBlockMock()

      const wrapper = shallowMount(DocumentBlock, { propsData })
      expect(wrapper.find(DocumentBlockNameInput).props().value).toEqual(
        propsData.name
      )
    })

    it(':status(undefined) - no status class ', () => {
      const propsData = documentBlockMock({ status: '' })
      const wrapper = shallowMount(DocumentBlock, { propsData })
      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining([expect.stringMatching(/status-/)])
      )
    })

    it(':status(success) - has status-success class', () => {
      const propsData = documentBlockMock({ status: 'success' })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-success')
    })

    it(':status(error) - has status-error class', () => {
      const propsData = documentBlockMock({ status: 'error' })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':status(warning) - has status-warning class', () => {
      const propsData = documentBlockMock({ status: 'error' })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':waiting - should pass waiting to DocumentBlockNameInput component', () => {
      const propsData = documentBlockMock({ waiting: true })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.find(DocumentBlockNameInput).props().waiting).toEqual(true)
    })

    it(':waiting(false) - no waiting class', () => {
      const propsData = documentBlockMock({ waiting: false })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['waiting']))
    })

    it(':waiting(true) - has waiting class', () => {
      const propsData = documentBlockMock({ waiting: true })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.classes()).toContain('waiting')
    })

    it(':disabled - should pass disabled to DocumentBlockNameInput component', () => {
      const propsData = documentBlockMock({ disabled: true })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.find(DocumentBlockNameInput).props().disabled).toEqual(
        true
      )
    })
  })

  describe('@events', () => {
    it('@change - should emit change when name changed', () => {
      const propsData = documentBlockMock({ disabled: false, waiting: false })
      const stubs = { TipeDocumentBlockNameInput: DocumentBlockNameInput }
      const wrapper = shallowMount(DocumentBlock, { propsData, stubs })

      wrapper.find(DocumentBlockNameInput).trigger('change')

      expect(wrapper.emitted().change).toBeTruthy()
      expect(wrapper.emitted().change[0][0]).toMatchObject({
        name: propsData.name
      })
    })

    it('@change - should emit change when value changed', () => {
      const propsData = documentBlockMock({
        disabled: false,
        waiting: false,
        value: faker.lorem.word()
      })
      const stubs = {
        'tipe-document-block-value-input': DocumentBlockValueInputStub
      }
      const wrapper = shallowMount(DocumentBlock, { propsData, stubs })

      wrapper.find(DocumentBlockValueInputStub).trigger('change')
      expect(wrapper.emitted().change).toBeTruthy()
      expect(wrapper.emitted().change[0][0]).toMatchObject({
        value: propsData.value
      })
    })
  })
})
