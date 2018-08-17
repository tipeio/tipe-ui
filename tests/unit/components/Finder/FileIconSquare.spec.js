import { shallowMount } from '@vue/test-utils'
import FileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'
import { mocks } from '@tipe/tipe-test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('FileIconSquare', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(FileIconSquare)

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconSquare')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.label)
    })

    it(':picker(false) - should render options', () => {
      const propsData = { picker: false, ...mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.contains('.cue-container')).toEqual(true)
    })

    it(':picker(true) - should not render options', () => {
      const propsData = { picker: true, ...mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.contains('.cue-container')).toEqual(false)
    })

    it(':selected(false) - should not have selected class', () => {
      const propsData = { selected: false, ...mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.classes()).not.toContain('selected')
    })

    it(':selected(true) - should have selected class', () => {
      const propsData = { selected: true, ...mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.classes()).toContain('selected')
    })
  })

  describe('@events', () => {
    it('@click - emits', () => {
      const wrapper = shallowMount(FileIconSquare)

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
