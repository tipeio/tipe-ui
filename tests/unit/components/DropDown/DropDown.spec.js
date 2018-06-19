import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DropDown from '@/components/DropDown'

describe('DropDown', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(DropDown)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(DropDown)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeDropDown')
    })

    it('<slot="control"> - renders control slot', () => {
      const slots = { control: '<div class="control"/>' }
      const wrapper = shallowMount(DropDown, { slots })

      expect(wrapper.contains('.control')).toEqual(true)
    })

    it('<slot="panel"> - panel slot not rendered', () => {
      const slots = { panel: '<div class="panel"/>' }
      const wrapper = shallowMount(DropDown, { slots })

      expect(wrapper.contains('.panel')).toEqual(false)
    })
  })

  describe('@event', () => {
    it('<slot="control" @click> - should toggle panel', () => {
      const slots = {
        control: '<div class="control"/>',
        panel: '<div class="panel"/>'
      }
      const wrapper = shallowMount(DropDown, { slots })

      wrapper.find('.control').trigger('click')
      expect(wrapper.contains('.panel')).toEqual(true)
      wrapper.find('.control').trigger('click')
      expect(wrapper.contains('.panel')).toEqual(false)
    })

    it('<slot="panel" @click> - should hide panel', () => {
      const slots = {
        control: '<div class="control"/>',
        panel: '<div class="panel"/>'
      }
      const wrapper = shallowMount(DropDown, { slots })

      wrapper.find('.control').trigger('click')
      expect(wrapper.contains('.panel')).toEqual(true)
      wrapper.find('.panel').trigger('click')
      expect(wrapper.contains('.panel')).toEqual(false)
    })
  })
})
