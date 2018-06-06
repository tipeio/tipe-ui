import { shallowMount } from '@vue/test-utils'
import AvatarUpload from '@/components/AvatarUpload'

describe('AvatarUpload.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(AvatarUpload)
    expect(wrapper).toMatchSnapshot()
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
