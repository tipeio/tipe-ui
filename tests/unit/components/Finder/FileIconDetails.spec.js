import { shallowMount } from '@vue/test-utils'
import FileIconDetails from '@/components/Finder/FileIcon/FileIconDetails'
import Icon from '@/components/Icon'
import { mocks, fixtures } from '@tipe/tipe-test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('FileIconDetails', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(FileIconDetails, { propsData: fixtures.file() })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFileIconDetails')
    })
  })

  describe(':props', () => {
    it(':file - should render label prop as label', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.label)
    })

    it(":file.icon - should pass icon to Icon component's :icon prop", () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual(propsData.icon)
    })

    it(':file.updatedAt - should display last updated', () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.updated-at').text()).toEqual(
        `Edited ${propsData.updatedAt}`
      )
    })

    it(":file.createdBy - should display author's name", () => {
      const propsData = mocks.file()
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.find('.created-by').text()).toMatch(
        new RegExp(
          `${propsData.createdBy.firstName} ${propsData.createdBy.lastName}`
        )
      )
    })

    it(':picker(false) - should render options', () => {
      const propsData = { picker: false, ...mocks.file() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      wrapper.trigger('mouseover')

      expect(wrapper.contains('.trash')).toEqual(true)
      expect(wrapper.contains('.edit')).toEqual(true)
    })

    it(':picker(true) - should not render options', () => {
      const propsData = { picker: true, ...mocks.file() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      wrapper.trigger('mouseover')

      expect(wrapper.contains('.trash')).toEqual(false)
      expect(wrapper.contains('.edit')).toEqual(false)
    })

    it(':selected(false) - should not have selected class', () => {
      const propsData = { selected: false, ...mocks.file() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.classes()).not.toContain('selected')
    })

    it(':selected(true) - should have selected class', () => {
      const propsData = { selected: true, ...mocks.file() }
      const wrapper = shallowMount(FileIconDetails, { propsData })

      expect(wrapper.classes()).toContain('selected')
    })
  })
})

describe('@events', () => {
  it('@hovered - should show trash button', () => {
    const propsData = mocks.file()
    const wrapper = shallowMount(FileIconDetails, { propsData })

    expect(wrapper.contains('.trash')).toEqual(false)
    wrapper.trigger('mouseover')
    expect(wrapper.contains('.trash')).toEqual(true)
  })

  it('@hovered - should show edit button', () => {
    const propsData = mocks.file()
    const wrapper = shallowMount(FileIconDetails, { propsData })

    expect(wrapper.contains('.edit')).toEqual(false)
    wrapper.trigger('mouseover')
    expect(wrapper.contains('.edit')).toEqual(true)
  })

  it('@click - should emit click event', () => {
    const propsData = mocks.file()
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.find('.details-button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('@delete - should emit delete event', () => {
    const propsData = mocks.file()
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.trigger('mouseover')
    wrapper.find('.trash').trigger('click')
    expect(wrapper.emitted('delete')).toBeTruthy()
  })

  it('@edit - should emit delete event', () => {
    const propsData = mocks.file()
    const wrapper = shallowMount(FileIconDetails, { propsData })

    wrapper.trigger('mouseover')
    wrapper.find('.edit').trigger('click')
    expect(wrapper.emitted('edit')).toBeTruthy()
  })
})
