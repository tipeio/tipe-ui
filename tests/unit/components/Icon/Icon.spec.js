import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon'

describe('Icon', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(Icon)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Icon)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeIcon')
    })
  })
})
