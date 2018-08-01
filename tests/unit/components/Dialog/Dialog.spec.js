import { shallowMount } from '@vue/test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'
import TipeDialog from '@/components/Dialog'
import faker from 'faker'

describe('Dialog', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(TipeDialog)

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TipeDialog)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDialog')
    })
  })

  describe(':props', () => {
    it(':title - should render', () => {
      const propsData = { title: faker.lorem.sentence() }
      const wrapper = shallowMount(TipeDialog, { propsData })

      expect(wrapper.find('h1').text()).toEqual(propsData.title)
    })

    it(':message - should render', () => {
      const propsData = { message: faker.lorem.sentence() }
      const wrapper = shallowMount(TipeDialog, { propsData })

      expect(wrapper.find('p').text()).toEqual(propsData.message)
    })
  })
})
