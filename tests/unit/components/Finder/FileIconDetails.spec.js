import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import moment from 'moment'
import FileIconDetails from '@/components/Finder/FileIcon/FileIconDetails'
import Icon from '@/components/Icon'
import fileMock from '@/mocks/File'

describe('FileIconDetails', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = {
        file: {
          label: 'hello world',
          type: 'document',
          updatedAt: Date.now(),
          createdBy: {
            firstName: 'test',
            lastName: 'test'
          }
        }
      }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconDetails')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.file.label)
    })

    it(':file.type(folder) - should pass "folder" to Icon component\'s :icon prop', () => {
      const propsData = { file: fileMock({ type: 'folder' }) }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('folder')
    })

    it(':file.type(document) - should pass "file" to Icon component\'s :icon prop', () => {
      const propsData = { file: fileMock({ type: 'document' }) }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual('file')
    })

    it(':file.updatedAt - should display last updated delta', () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.updated-at').text()).toMatch(
        new RegExp(moment(propsData.file.updatedAt).fromNow())
      )
    })

    it(":file.createdBy - should display author's name", () => {
      const propsData = { file: fileMock() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.created-by').text()).toMatch(
        new RegExp(
          `${propsData.file.createdBy.firstName} ${
            propsData.file.createdBy.lastName
          }`
        )
      )
    })
  })
})

describe('@events', () => {
  it('@hovered - should show trash button', () => {
    const propsData = { file: fileMock() }
    const wrapper = shallowMount(FileIconDetails, { propsData })

    expect(wrapper.contains('.trash')).toEqual(false)
    wrapper.trigger('mouseover')
    expect(wrapper.contains('.trash')).toEqual(true)
  })

  it('@hovered - should show edit button', () => {
    const propsData = { file: fileMock() }
    const wrapper = shallowMount(FileIconDetails, { propsData })

    expect(wrapper.contains('.edit')).toEqual(false)
    wrapper.trigger('mouseover')
    expect(wrapper.contains('.edit')).toEqual(true)
  })

  it('@click - should emit click event', () => {
    const propsData = { file: fileMock() }
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.find('.details-button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('@delete - should emit delete event', () => {
    const propsData = { file: fileMock() }
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.trigger('mouseover')
    wrapper.find('.trash').trigger('click')
    expect(wrapper.emitted('delete')).toBeTruthy()
  })

  it('@edit - should emit delete event', () => {
    const propsData = { file: fileMock() }
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.trigger('mouseover')
    wrapper.find('.edit').trigger('click')
    expect(wrapper.emitted('edit')).toBeTruthy()
  })
})
