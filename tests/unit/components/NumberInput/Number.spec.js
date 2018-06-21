import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import NumberInput from '@/components/NumberInput'
import tipeTestUtils from '~/tests/TipeTestUtils'
import faker from 'faker'

describe('NumberInput', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { file: { type: 'document', label: 'test' } }
      const wrapper = shallowMount(NumberInput, { propsData })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeNumberInput')
    })

    it('contains an input tag', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.contains('input')).toEqual(true)
    })

    it('input type is number', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.find('input').attributes().type).toEqual('number')
    })

    it('contains spinner buttons', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.findAll('button')).toHaveLength(2)
    })
  })
  describe(':props', () => {
    it(':value - should pass value input element', () => {
      const propsData = { value: faker.random.number() }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').element.value).toEqual(`${propsData.value}`)
    })

    tipeTestUtils.test.input.size(NumberInput)

    tipeTestUtils.test.input.status(NumberInput)

    tipeTestUtils.test.input.disabled(NumberInput, wrapper =>
      wrapper.find('input')
    )

    it(':placeholder - should pass placeholder to input', () => {
      const propsData = { placeholder: 'number here' }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').attributes().placeholder).toEqual(
        `${propsData.placeholder}`
      )
    })

    tipeTestUtils.test.input.waiting(NumberInput)

    it(':waiting(true) - has disabled attribute', () => {
      const propsData = { disabled: true }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').attributes().disabled).toBeTruthy()
      expect(wrapper.find('button').attributes().disabled).toBeTruthy()
      expect(
        wrapper
          .findAll('button')
          .at(1)
          .attributes().disabled
      ).toBeTruthy()
    })

    it(':step - passed to input step attribue', () => {
      const propsData = { step: faker.random.number() }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').attributes().step).toEqual(
        `${propsData.step}`
      )
    })

    it(':max - passed to input max attribue', () => {
      const propsData = { max: faker.random.number() }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').attributes().max).toEqual(`${propsData.max}`)
    })

    it(':min - passed to input max attribue', () => {
      const propsData = { min: faker.random.number() }
      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.find('input').attributes().min).toEqual(`${propsData.min}`)
    })
  })

  describe('@events', () => {
    it('@focus - should emit', () => {
      const wrapper = shallowMount(NumberInput)
      wrapper.find('input').trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('@blur - should emit', () => {
      const wrapper = shallowMount(NumberInput)
      wrapper.find('input').trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })

    it('@click - should emit', () => {
      const wrapper = shallowMount(NumberInput)
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })

    it('@change - should emit', () => {
      const wrapper = shallowMount(NumberInput)
      wrapper.find('input').trigger('change')
      expect(wrapper.emitted().change).toBeTruthy()
    })

    it('@input - should emit', () => {
      const wrapper = shallowMount(NumberInput)
      wrapper.find('input').trigger('input')
      expect(wrapper.emitted().input).toBeTruthy()
    })

    it('<button @click> - first button increments value', () => {
      const wrapper = shallowMount(NumberInput, { propsData: { value: 0 } })
      const input = wrapper.find('input')
      const originalValue = parseInt(input.element.value)

      wrapper.find('button').trigger('click')

      expect(parseInt(input.element.value)).toEqual(originalValue + 1)
    })

    it('<button @click> - second button decrements value', () => {
      const wrapper = shallowMount(NumberInput, { propsData: { value: 0 } })
      const input = wrapper.find('input')
      const originalValue = parseInt(input.element.value)

      wrapper
        .findAll('button')
        .at(1)
        .trigger('click')

      expect(parseInt(input.element.value)).toEqual(originalValue - 1)
    })
  })
})
