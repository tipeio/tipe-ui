import tipeTestUtils from '~/tests/TipeTestUtils'
import { shallowMount } from '@vue/test-utils'
import TipeModal from '@/components/Modal'
import faker from 'faker'

describe('Modal', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(TipeModal)

    it('has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(TipeModal)
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeModal')
    })
  })

  describe(':props', () => {
    it(':height - should pass to .container style attribute', () => {
      const propsData = { height: `${faker.random.number()}px` }
      const wrapper = shallowMount(TipeModal, { propsData })

      expect(wrapper.find('.container').element.style.height).toEqual(
        propsData.height
      )
    })

    it(':width - should pass to .container style attribute', () => {
      const propsData = { width: `${faker.random.number()}px` }
      const wrapper = shallowMount(TipeModal, { propsData })

      expect(wrapper.find('.container').element.style.width).toEqual(
        propsData.width
      )
    })
  })

  describe('@events', () => {
    describe('@close - should emit when close button clicked', () => {
      const wrapper = shallowMount(TipeModal)

      wrapper.find('button').trigger('click')
      expect(wrapper.emitted().close).toBeTruthy()
    })
  })
})
