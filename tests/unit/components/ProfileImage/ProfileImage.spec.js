import { shallowMount } from '@vue/test-utils'
import ProfileImage from '@/components/ProfileImage'
import TypeImage from '@/components/Image'
import faker from 'faker'

describe('ProfileImage', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(ProfileImage)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(ProfileImage)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeProfileImage')
    })
  })

  describe(':props', () => {
    it('url should default to http://placekitten.com/200/300', () => {
      const wrapper = shallowMount(ProfileImage)

      expect(wrapper.props().url).toEqual('http://placekitten.com/200/300')
    })

    it('should pass url prop to Image', () => {
      const propsData = { url: faker.internet.url() }
      const wrapper = shallowMount(ProfileImage, { propsData })
      const imageWrapper = wrapper.find(TypeImage)

      expect(imageWrapper.props().url).toEqual(propsData.url)
    })
  })

  describe('@events', () => {
    it('click', () => {
      const wrapper = shallowMount(ProfileImage)

      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
