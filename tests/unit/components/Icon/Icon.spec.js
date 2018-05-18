import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon'

describe('Icon', () => {
  it('matches previous snapshot', () => {
    const propsData = { icon: 'folder' }
    const wrapper = shallowMount(Icon, { propsData })

    expect(wrapper).toMatchSnapshot()
  })

  it('has correct data-tipe-iu attibute', () => {
    const propsData = { icon: 'folder' }
    const wrapper = shallowMount(Icon, { propsData })

    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeIcon')
  })
})
