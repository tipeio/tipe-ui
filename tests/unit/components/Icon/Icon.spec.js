import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/Icon'

const mockIconLoader = () => ({
  viewBox: '0 0 20 20',
  id: 'test'
})

describe('Icon', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const propsData = { __iconLoader__: mockIconLoader }
      const wrapper = shallowMount(Icon, { propsData })

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const propsData = { __iconLoader__: mockIconLoader }
      const wrapper = shallowMount(Icon, { propsData })

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeIcon')
    })
  })
})
