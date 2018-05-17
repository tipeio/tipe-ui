import { shallowMount } from '@vue/test-utils'
import Image from '@/components/image/Image.vue'
import faker from 'faker'

describe('Image', () => {
  it('matched previous snapshot', () => {
    const wrapper = shallowMount(Image)

    expect(wrapper).toMatchSnapshot()
  })

  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(Image)

    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeImage')
  })

  describe('url is not provided', () => {
    it('shows error state', () => {
      const wrapper = shallowMount(Image)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeImage')
    })
  })

  describe('alt is not provided', () => {
    it('img alt attribute should be empty', () => {
      const wrapper = shallowMount(Image)

      expect(wrapper.find('img').attributes().alt).toBe('')
    })
  })

  describe('alt is provided', () => {
    it('img alt attribute should match alt prop', () => {
      const propsData = { alt: faker.lorem.word() }
      const wrapper = shallowMount(Image, { propsData })

      expect(wrapper.find('img').attributes().alt).toBe(propsData.alt)
    })
  })

  describe('url is provided', () => {
    it('img src attribute should match url prop', () => {
      const propsData = { url: faker.internet.url() }
      const wrapper = shallowMount(Image, { propsData })

      expect(wrapper.find('img').attributes().src).toBe(propsData.url)
    })
  })
})
