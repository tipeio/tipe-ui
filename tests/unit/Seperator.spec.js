import { shallowMount } from '@vue/test-utils'
import Seperator from '@/components/Seperator.vue'

describe('Seperator', () => {
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(Seperator)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSeperator')
  })
})
