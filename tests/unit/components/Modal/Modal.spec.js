import tipeTestUtils from '~/tests/TipeTestUtils'
import { shallowMount } from '@vue/test-utils'
import TipeModal from '@/components/Modal'

describe('Modal', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(TipeModal)

    it('has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(TipeModal)
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeModal')
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
