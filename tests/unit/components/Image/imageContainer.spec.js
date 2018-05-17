import { shallowMount } from '@vue/test-utils'
import ImageContainer from '@/components/image/ImageContainer.vue'

describe('Image Container', () => {
  it('name is TipeImageContainer', () => {
    const wrapper = shallowMount(ImageContainer)
    expect(wrapper.name()).toBe('TipeImageContainer')
  })

  it('image is loading', () => {
    const wrapper = shallowMount(ImageContainer)

    expect(wrapper.vm.status).toBe('waiting')
  })

  it('image has loaded', async () => {
    let res
    const Image = new Promise(resolve => {
      res = resolve
    })
    const imageLoader = () => Image
    const propsData = { imageLoader }
    const wrapper = shallowMount(ImageContainer, { propsData })

    res()
    await Image

    expect(wrapper.vm.status).toBe('ok')
  })

  it('image failed to load', async () => {
    let rej
    const Image = new Promise((resolve, reject) => {
      rej = reject
    })

    const imageLoader = () => Image
    const propsData = { imageLoader }
    const wrapper = shallowMount(ImageContainer, { propsData })

    try {
      await rej()
    } catch (error) {
      expect(wrapper.vm.status).toBe('error')
    }
  })
})
