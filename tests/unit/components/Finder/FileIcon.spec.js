import { shallowMount } from '@vue/test-utils'
import FileIcon from '@/components/Finder/FileIcon'
import FileIconRectangle from '@/components/Finder/FileIcon/FileIconRectangle'
import FileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'
import FileIconDetails from '@/components/Finder/FileIcon/FileIconDetails'
import { mocks, fixtures } from '@tipe/tipe-test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('FileIcon', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(FileIcon, {
      propsData: { file: fixtures.file() }
    })
  })

  describe(':props', () => {
    it(':type(default) - should render FileIconRectangle component', () => {
      const propsData = { file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.contains(FileIconRectangle)).toEqual(true)
    })

    it(':type(square) - should render FileIconSquare component', () => {
      const propsData = { file: mocks.file(), type: 'square' }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.contains(FileIconSquare)).toEqual(true)
    })

    it(':type(default) - :file - should pass file to FileIconRectangle component', () => {
      const propsData = { type: 'rectangle', file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconRectangle).props()).toEqual(
        expect.objectContaining({
          label: propsData.file.label,
          icon: propsData.file.icon
        })
      )
    })

    it(':type(square) - :file - should pass file to FileIconSquare component', () => {
      const propsData = { type: 'square', file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconSquare).props()).toEqual(
        expect.objectContaining({
          label: propsData.file.label,
          icon: propsData.file.icon
        })
      )
    })

    it(':type(details) - :file - should pass file to FileIconDetails component', () => {
      const propsData = { type: 'details', file: mocks.file() }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconDetails).props()).toEqual(
        expect.objectContaining({
          label: propsData.file.label,
          icon: propsData.file.icon,
          createdBy: propsData.file.createdBy,
          updatedAt: propsData.file.updatedAt
        })
      )
    })

    it(':type(rectangle) - :picker - should pass picker to FileIconRectangle component', () => {
      const propsData = { type: 'rectangle', file: mocks.file(), picker: true }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconRectangle).props().picker).toEqual(true)
    })

    it(':type(square) - :picker - should pass picker to FileIconSquare component', () => {
      const propsData = { type: 'square', file: mocks.file(), picker: true }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconSquare).props().picker).toEqual(true)
    })

    it(':type(details) - :picker - should pass picker to FileIconDetails component', () => {
      const propsData = { type: 'details', file: mocks.file(), picker: true }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconDetails).props().picker).toEqual(true)
    })

    it(':type(rectangle) - :selected - should pass picker to FileIconRectangle component', () => {
      const propsData = {
        type: 'rectangle',
        file: mocks.file(),
        selected: true
      }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconRectangle).props().selected).toEqual(true)
    })

    it(':type(square) - :selected - should pass picker to FileIconSquare component', () => {
      const propsData = {
        type: 'square',
        file: mocks.file(),
        selected: true
      }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconSquare).props().selected).toEqual(true)
    })

    it(':type(details) - :selected - should pass picker to FileIconDetails component', () => {
      const propsData = {
        type: 'details',
        file: mocks.file(),
        selected: true
      }
      const wrapper = shallowMount(FileIcon, { propsData })

      expect(wrapper.find(FileIconDetails).props().selected).toEqual(true)
    })
  })
})
