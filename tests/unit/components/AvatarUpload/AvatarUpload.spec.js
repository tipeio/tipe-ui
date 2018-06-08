import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import AvatarUpload from '@/components/AvatarUpload'

describe('AvatarUpload.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(AvatarUpload)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(AvatarUpload)
    expect(wrapper.attributes()['data-tipe-ui']).toBe('AvatarUpload')
  })
  it('should render with the add-avatar class', () => {
    const wrapper = shallowMount(AvatarUpload)
    expect(wrapper.classes()).toContain('add-avatar')
  })
  it('should emit click event', () => {
    const wrapper = shallowMount(AvatarUpload)
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
