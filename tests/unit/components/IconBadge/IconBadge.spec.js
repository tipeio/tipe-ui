import { shallowMount } from '@vue/test-utils'
import IconBadge from '@/components/IconBadge'

describe('IconBadge.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(IconBadge)
    expect(wrapper).toMatchSnapshot()
  })
})
