import { shallowMount } from '@vue/test-utils'
import FileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'
import { mocks } from '@tipe/tipe-test-utils'

describe('FileIconSquare', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const propsData = {
        file: { label: 'hello world', type: 'document' }
      }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconSquare')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })
  })

  describe('@events', () => {
    it('@click - emits', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
