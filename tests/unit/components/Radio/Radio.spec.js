import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Radio from '@/components/Radio'
import tipeTestUtils from '~/tests/TipeTestUtils'

describe('Radio', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const propsData = { label: 'Javascript' }
      const wrapper = shallowMount(Radio, { propsData })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Radio)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeRadio')
    })

    it('contains an input tag', () => {
      const wrapper = shallowMount(Radio)

      expect(wrapper.contains('input')).toEqual(true)
    })

    it('input type is Radio', () => {
      const wrapper = shallowMount(Radio)

      expect(wrapper.find('input').attributes().type).toEqual('radio')
    })

    it('contains a label', () => {
      const wrapper = shallowMount(Radio)

      expect(wrapper.findAll('label')).toHaveLength(1)
    })
  })
  describe(':props', () => {
    it(':value - should pass value input element', () => {
      const propsData = { label: 'Javascript' }
      const wrapper = shallowMount(Radio, { propsData })
      expect(wrapper.find('label').text()).toEqual(`${propsData.label}`)
    })

    it(':name - should pass name input element', () => {
      const propsData = { name: 'javascript' }
      const wrapper = shallowMount(Radio, { propsData })
      expect(wrapper.find('input').element.name).toEqual(`${propsData.name}`)
    })

    tipeTestUtils.test.input.size(Radio)

    tipeTestUtils.test.input.status(Radio)

    tipeTestUtils.test.input.disabled(Radio, wrapper => wrapper.find('input'))

    it(':checked - should pass checked to input', () => {
      const propsData = { checked: true }
      const wrapper = shallowMount(Radio, { propsData })
      expect(wrapper.find('input').element.checked).toEqual(propsData.checked)
    })

    tipeTestUtils.test.input.waiting(Radio)

    it(':waiting(true) - has disabled attribute', () => {
      const propsData = { waiting: true }
      const wrapper = shallowMount(Radio, { propsData })
      expect(wrapper.find('input').attributes().disabled).toBeTruthy()
    })
  })

  describe('@events', () => {
    it('@focus - should emit', () => {
      const wrapper = shallowMount(Radio)
      wrapper.find('input').trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('@blur - should emit', () => {
      const wrapper = shallowMount(Radio)
      wrapper.find('input').trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })

    it('@click - should emit', () => {
      const wrapper = shallowMount(Radio)
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })

    it('@change - should emit', () => {
      const wrapper = shallowMount(Radio)
      wrapper.find('input').trigger('change')
      expect(wrapper.emitted().change).toBeTruthy()
    })
  })
})
