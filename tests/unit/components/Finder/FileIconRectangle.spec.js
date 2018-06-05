import { shallowMount } from '@vue/test-utils'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import Icon from '@/components/Icon'
import faker from 'faker'

const createFile = file => ({
  label: faker.lorem.word(),
  type: ['document', 'folder'][faker.random.number(1)],
  ...file
})

describe('FileIconRectangle', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const propsData = {
        file: createFile({ label: 'hello world', type: 'document' })
      }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: createFile() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconRectangle')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: createFile() }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })

    it(':type(folder) - should pass "folder" to Icon component\'s :icon prop', () => {
      const propsData = { file: createFile({ type: 'folder' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('folder')
    })

    it(':type(document) - should pass "file" to Icon component\'s :icon prop', () => {
      const propsData = { file: createFile({ type: 'document' }) }
      const wrapper = shallowMount(FileIconRectangle, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('file')
    })
  })
})
