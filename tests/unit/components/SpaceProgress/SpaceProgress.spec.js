import { shallowMount } from '@vue/test-utils'
import SpaceProgress from '@/components/SpaceProgress'

describe('SpaceProgress.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(SpaceProgress)
    expect(wrapper).toMatchSnapshot()
  })
})
