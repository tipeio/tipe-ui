import { shallowMount } from '@vue/test-utils'
import Image from '@/components/Image/Image.vue'
import faker from 'faker'

describe('Image', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Image)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Image)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeImage')
    })
  })

  describe(':props', () => {
    it(':url - image src attribute should match url', () => {
      const propsData = { url: faker.internet.url() }
      const wrapper = shallowMount(Image, { propsData })
      const img = wrapper.find('img')

      expect(img.attributes().src).toBe(propsData.url)
    })

    it(':alt - image alt attribute should match alt', () => {
      const propsData = { alt: faker.lorem.sentence() }
      const wrapper = shallowMount(Image, { propsData })
      const img = wrapper.find('img')

      expect(img.attributes().alt).toBe(propsData.alt)
    })
  })
})
