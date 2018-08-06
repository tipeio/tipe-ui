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
  })

  describe('@events', () => {
    it('@click - emits', () => {
      const wrapper = shallowMount(FileIconSquare)

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
