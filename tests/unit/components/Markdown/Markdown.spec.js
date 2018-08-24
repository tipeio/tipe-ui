import { shallowMount, mount } from '@vue/test-utils'
import TipeMarkdown from '@/components/Markdown'
import TipeMarkdownViewer from '@/components/Markdown/MarkdownViewer'
import TipeMarkdownEditor from '@/components/Markdown/MarkdownEditor'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('Markdown', () => {
  describe('<template>', () => {
    describe('<template>', () => {
      tipeTestUtils.test.snapshot(TipeMarkdown)

      it('has correct data-tipe-iu attibute', () => {
        const wrapper = shallowMount(TipeMarkdown)

        expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeMarkdown')
      })
    })
  })

  describe(':props', () => {
    it(':preview(true) - should display MarkdownViewer', () => {
      const propsData = { preview: true }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.contains(TipeMarkdownViewer)).toEqual(true)
    })

    it(':preview(false) - should display MarkdownViewer', () => {
      const propsData = { preview: false }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.contains(TipeMarkdownEditor)).toEqual(true)
    })

    it(':preview(true), :value - should pass to MarkdownViewer', () => {
      const propsData = { preview: true, value: 'i am a ~~test~~ **test**.' }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.find(TipeMarkdownViewer).props().value).toEqual(
        propsData.value
      )
    })

    it(':preview(false), :value - should pass to MarkdownEditor', () => {
      const propsData = { preview: false, value: 'i am a ~~test~~ **test**.' }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.find(TipeMarkdownEditor).props().value).toEqual(
        propsData.value
      )
    })

    it(':size(small) - root element contains size class', () => {
      const propsData = { size: 'small' }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.classes()).toContain(propsData.size)
    })

    it(':size(medium) - root element contains size class', () => {
      const propsData = { size: 'medium' }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.classes()).toContain(propsData.size)
    })

    it(':size(large) - root element contains size class', () => {
      const propsData = { size: 'large' }
      const wrapper = shallowMount(TipeMarkdown, { propsData })

      expect(wrapper.classes()).toContain(propsData.size)
    })
  })

  describe('@events', () => {
    it('@change - should emit when user edits text', () => {
      const propsData = { preview: false, value: '' }
      const stubs = ['tipe-icon']
      const wrapper = mount(TipeMarkdown, { propsData, stubs })

      wrapper.find('textarea').trigger('change')

      expect(wrapper.emitted().change).toBeTruthy()
    })

    it('@change - parameter should be users text', () => {
      const propsData = { preview: false, value: '' }
      const stubs = ['tipe-icon']
      const wrapper = mount(TipeMarkdown, { propsData, stubs })

      const text = 'i am a ~~test~~ **test**.'
      wrapper.find('textarea').setValue(text)
      wrapper.find('textarea').trigger('change')

      expect(wrapper.emitted().change[0][0]).toEqual(text)
    })
  })
})
