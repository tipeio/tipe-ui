import { shallowMount } from '@vue/test-utils'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import Icon from '@/components/Icon'
import { mocks, fixtures } from '@tipe/tipe-test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('FileIconRectangle', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(FileIconRectangle, {
      propsData: { file: fixtures.file() }
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconRectangle')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.label)
    })

    it(":icon - should pass icon to Icon component's :icon prop", () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual(propsData.icon)
    })
  })

  describe('@events', () => {
    it('@click - emits', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      wrapper.find('.file-icon').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()

      wrapper.find('.label').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
