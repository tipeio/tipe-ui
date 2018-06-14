import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocumentBlock from '@/components/DocumentEditor/DocumentBlock/DocumentBlock'
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
  })

  describe(':props', () => {
    it(':name - should pass name to name input element value prop', () => {
      const propsData = documentBlockMock()

      const wrapper = shallowMount(DocumentBlock, { propsData })
      expect(wrapper.find('input[name="name"]').element.value).toEqual(
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

    it(':waiting(true) - name input has disabled attribute', () => {
      const propsData = documentBlockMock({ waiting: true })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.find('input').attributes().disabled).toBeTruthy()
    })

    it(':disabled(false) - no disabled attribute', () => {
      const propsData = documentBlockMock({ disabled: false, waiting: false })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.find('input').attributes().disabled).toBeFalsy()
    })

    it(':disabled(true) - has disabled attribute', () => {
      const propsData = documentBlockMock({ disabled: true })
      const wrapper = shallowMount(DocumentBlock, { propsData })

      expect(wrapper.find('input').attributes().disabled).toBeTruthy()
    })
  })

  describe('@events', () => {
    it('<input name="name" @change> - should emit change', () => {
      const propsData = documentBlockMock({ disabled: false, waiting: false })
      const wrapper = shallowMount(DocumentBlock, { propsData })
      const input = wrapper.find('input[name="name"]')
      const newName = faker.lorem.word()

      input.setValue(newName)
      input.trigger('change')

      expect(wrapper.emitted().change).toBeTruthy()
      expect(wrapper.emitted().change[0][0]).toMatchObject({ name: newName })
    })
  })
})
