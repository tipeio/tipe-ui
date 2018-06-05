import { shallowMount } from '@vue/test-utils'
import FileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'
import fileMock from '@/mocks/File'

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
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconSquare')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconSquare, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })
  })
})
