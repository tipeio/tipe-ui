import { shallowMount } from '@vue/test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'
import TipeProgress from '@/components/Progress'
import faker from 'faker'

describe('Progress', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(TipeProgress)

    it('<root> - has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(TipeProgress)
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeProgress')
    })
  })

  describe(':props', () => {
    it(':value - should pass to progress element', () => {
      const propsData = { value: faker.random.number() }
      const wrapper = shallowMount(TipeProgress, { propsData })

      expect(wrapper.find('progress').element.value).toEqual(
        `${propsData.value}`
      )
    })

    it(':max - should pass to progress element', () => {
      const propsData = { max: faker.random.number() }
      const wrapper = shallowMount(TipeProgress, { propsData })

      expect(wrapper.find('progress').attributes().max).toEqual(
        `${propsData.max}`
      )
    })
  })
})
