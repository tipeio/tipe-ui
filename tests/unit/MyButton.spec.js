import { shallowMount } from '@vue/test-utils'
import MyButton from '@/components/MyButton.vue'

describe('MyButton.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(MyButton)
    expect(wrapper).toMatchSnapshot()
  })
})
