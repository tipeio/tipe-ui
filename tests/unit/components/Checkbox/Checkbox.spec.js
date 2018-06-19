import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Checkbox from '@/components/Checkbox'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('Checkbox', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { label: 'Javascript' }
      const wrapper = shallowMount(Checkbox, { propsData })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Checkbox)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeCheckbox')
    })

    it('contains an input tag', () => {
      const wrapper = shallowMount(Checkbox)

      expect(wrapper.contains('input')).toEqual(true)
    })

    it('input type is checkbox', () => {
      const wrapper = shallowMount(Checkbox)

      expect(wrapper.find('input').attributes().type).toEqual('checkbox')
    })

    it('contains a label', () => {
      const wrapper = shallowMount(Checkbox)

      expect(wrapper.findAll('label')).toHaveLength(1)
    })
  })
  describe(':props', () => {
    it(':value - should pass value input element', () => {
      const propsData = { value: 'javascript' }
      const wrapper = shallowMount(Checkbox, { propsData })
      expect(wrapper.find('input').element.value).toEqual(`${propsData.value}`)
    })

    it(':name - should pass name input element', () => {
      const propsData = { name: 'Javascript' }
      const wrapper = shallowMount(Checkbox, { propsData })
      expect(wrapper.find('input').element.name).toEqual(`${propsData.name}`)
    })

    tipeTestUtils.test.input.size(Checkbox)

    tipeTestUtils.test.input.status(Checkbox)

    tipeTestUtils.test.input.disabled(Checkbox, wrapper =>
      wrapper.find('input')
    )

    it(':checked - should pass checked to input', () => {
      const propsData = { checked: true }
      const wrapper = shallowMount(Checkbox, { propsData })
      expect(wrapper.find('input').attributes().checked).toEqual(
        `${propsData.checked}`
      )
    })

    tipeTestUtils.test.input.waiting(Checkbox)

    it(':waiting(true) - has disabled attribute', () => {
      const propsData = { waiting: true }
      const wrapper = shallowMount(Checkbox, { propsData })
      expect(wrapper.find('input').attributes().disabled).toBeTruthy()
    })
  })

  describe('@events', () => {
    it('@focus - should emit', () => {
      const wrapper = shallowMount(Checkbox)
      wrapper.find('input').trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('@blur - should emit', () => {
      const wrapper = shallowMount(Checkbox)
      wrapper.find('input').trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })

    it('@click - should emit', () => {
      const wrapper = shallowMount(Checkbox)
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })

    it('@change - should emit', () => {
      const wrapper = shallowMount(Checkbox)
      wrapper.find('input').trigger('change')
      expect(wrapper.emitted().change).toBeTruthy()
    })
  })
})
