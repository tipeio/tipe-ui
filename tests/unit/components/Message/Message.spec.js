import { shallowMount } from '@vue/test-utils'
import TipeMessage from '@/components/Message'
import tipeTestUtils from '~/tests/TipeTestUtils'
import faker from 'faker'

describe('Message', () => {
  describe('<template>', () => {
    describe('<template>', () => {
      tipeTestUtils.test.snapshot(TipeMessage)

      it('has correct data-tipe-iu attibute', () => {
        const wrapper = shallowMount(TipeMessage)

        expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeMessage')
      })
    })
  })

  describe(':props', () => {
    it(':status(undefined) - no status class', () => {
      const wrapper = shallowMount(TipeMessage)

      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining([expect.stringMatching(/status-/)])
      )
    })

    it(':status(undefined) - displays no message', () => {
      const wrapper = shallowMount(TipeMessage)

      expect(wrapper.text()).toEqual('')
    })

    it(':status(success) - has status-success class', () => {
      const propsData = { status: 'success' }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.classes()).toContain('status-success')
    })

    it(':status(success) - displays success message', () => {
      const propsData = {
        status: 'success',
        successMessage: faker.lorem.sentence()
      }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.text()).toEqual(propsData.successMessage)
    })

    it(':status(warning) - has status-warning class', () => {
      const propsData = { status: 'warning' }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.classes()).toContain('status-warning')
    })

    it(':status(warning) - displays warning message', () => {
      const propsData = {
        status: 'warning',
        warningMessage: faker.lorem.sentence()
      }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.text()).toEqual(propsData.warningMessage)
    })

    it(':status(error) - has status-error class', () => {
      const propsData = { status: 'error' }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':status(error) - displays error message', () => {
      const propsData = {
        status: 'error',
        errorMessage: faker.lorem.sentence()
      }
      const wrapper = shallowMount(TipeMessage, { propsData })

      expect(wrapper.text()).toEqual(propsData.errorMessage)
    })
  })
})
