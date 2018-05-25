import { shallowMount } from '@vue/test-utils'
import Progress from '@/components/Progress'

describe('Progress.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Progress)
    expect(wrapper).toMatchSnapshot()
  })
})
