import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import NumberInput from '@/components/NumberInput'
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

    it(':placeholder - should pass placeholder to input', () => {
      const propsData = { placeholder: 'number here' }
      const wrapper = shallowMount(NumberInput, { propsData })

      expect(wrapper.find('input').attributes().placeholder).toEqual(
        `${propsData.placeholder}`
      )
    })

    it(':status(undefined) - no status class ', () => {
      const wrapper = shallowMount(NumberInput)
      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining([expect.stringMatching(/status-/)])
      )
    })

    it(':size(undefined) - has medium class ', () => {
      const wrapper = shallowMount(NumberInput)
      expect(wrapper.classes()).toContain('medium')
    })

    it(':size(small) - has small class ', () => {
      const propsData = { size: 'small' }

      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.classes()).toContain('small')
    })

    it(':size(medium) - has medium class ', () => {
      const propsData = { size: 'medium' }

      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.classes()).toContain('medium')
    })

    it(':size(large) - has large class ', () => {
      const propsData = { size: 'large' }

      const wrapper = shallowMount(NumberInput, { propsData })
      expect(wrapper.classes()).toContain('large')
    })

    it(':status(success) - has status-success class', () => {
      const propsData = { status: 'success' }
      const wrapper = shallowMount(NumberInput, { propsData })

      expect(wrapper.classes()).toContain('status-success')
    })

    it(':status(error) - has status-error class', () => {
      const propsData = { status: 'error' }
      const wrapper = shallowMount(NumberInput, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':status(warning) - has status-warning class', () => {
      const propsData = { status: 'error' }
      const wrapper = shallowMount(NumberInput, { propsData })

      expect(wrapper.classes()).toContain('status-error')
    })

    it(':waiting(undefined) - no waiting class', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['waiting']))
    })

    it(':waiting(true) - has waiting class', () => {
      const propsData = { waiting: true }
      const wrapper = shallowMount(NumberInput, { propsData })

      expect(wrapper.classes()).toContain('waiting')
    })

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

    it(':disabled(undefined) - no disabled attribute', () => {
      const wrapper = shallowMount(NumberInput)

      expect(wrapper.attributes().disabled).toBeFalsy()
    })

    it(':disabled(true) - has disabled attribute', () => {
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
