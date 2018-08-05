import { shallowMount } from '@vue/test-utils'
import tipeTestUtils from '~/tests/TipeTestUtils'
import TipeField from '@/components/Field'
import TipeTextInput from '@/components/TextInput'
import faker from 'faker'

const props = {
  name: 'name',
  label: 'Name',
  field: {
    label: 'first name',
    placeholder: 'what is your first name?',
    value: '',
    size: 'small'
  }
}

describe('TipeField', () => {
  describe('<template>', () => {
    tipeTestUtils.test.snapshot(TipeField)

    it('has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(TipeField, {
        propsData: {
          ...props
        },
        slots: {
          default: [TipeTextInput]
        }
      })
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeField')
    })
  })

  describe(':props', () => {
    it(':label(empty) - should not render', () => {
      const wrapper = shallowMount(TipeField)

      expect(wrapper.find('label').exists()).toEqual(false)
    })

    it(':label(not empty) - should render', () => {
      const propsData = { label: faker.lorem.word() }
      const wrapper = shallowMount(TipeField, { propsData })

      expect(wrapper.find('label').exists()).toEqual(true)
    })

    it(':status(non) - should not display message', () => {
      const wrapper = shallowMount(TipeField)

      expect(wrapper.find('.message').exists()).toEqual(false)
    })

    it(':status(success) - should display success message', () => {
      const propsData = {
        status: 'success',
        successMessage: faker.lorem.word()
      }
      const wrapper = shallowMount(TipeField, { propsData })

      expect(wrapper.find('.message').exists()).toEqual(true)
      expect(wrapper.find('.message').text()).toEqual(propsData.successMessage)
    })

    it(':status(warning) - should display warning message', () => {
      const propsData = {
        status: 'warning',
        warningMessage: faker.lorem.word()
      }
      const wrapper = shallowMount(TipeField, { propsData })

      expect(wrapper.find('.message').exists()).toEqual(true)
      expect(wrapper.find('.message').text()).toEqual(propsData.warningMessage)
    })

    it(':status(error) - should display error message', () => {
      const propsData = { status: 'error', errorMessage: faker.lorem.word() }
      const wrapper = shallowMount(TipeField, { propsData })

      expect(wrapper.find('.message').exists()).toEqual(true)
      expect(wrapper.find('.message').text()).toEqual(propsData.errorMessage)
    })
  })
})
