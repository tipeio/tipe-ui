import { shallowMount } from '@vue/test-utils'
import ImageContainer from '@/components/Image/ImageContainer.vue'
import Image from '@/components/Image/Image.vue'
import ErrorTemplate from '@/components/Image/templates/ErrorTemplate.vue'
import WaitingTemplate from '@/components/Image/templates/WaitingTemplate.vue'
import faker from 'faker'
import mockImageLoader from '../../utils/mockImageLoader'

describe('Image Container', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(ImageContainer)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe(':props', () => {
    it(':url(invalid) - should render ErrorTemplate', () => {
      const imageLoader = mockImageLoader()
      const propsData = {
        __imageLoader__: imageLoader
      }
      const wrapper = shallowMount(ImageContainer, { propsData })

      imageLoader.reject()
      expect(wrapper.find(ErrorTemplate).exists()).toBe(true)
    })

    it(':url(loading) - should render WaitingTemplate', () => {
      const propsData = {
        url: faker.internet.url()
      }
      const wrapper = shallowMount(ImageContainer, { propsData })

      expect(wrapper.find(WaitingTemplate).exists()).toBe(true)
    })

    it(':url(done) - should render WaitingTemplate', () => {
      const imageLoader = mockImageLoader()
      const propsData = {
        url: faker.internet.url(),
        __imageLoader__: imageLoader
      }
      const wrapper = shallowMount(ImageContainer, { propsData })

      imageLoader.resolve()
      expect(wrapper.find(Image).exists()).toBe(true)
    })
  })
})
