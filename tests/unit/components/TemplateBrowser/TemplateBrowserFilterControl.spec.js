import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TemplateBrowserFilterControl from '@/components/TemplateBrowser/TemplateBrowserFilterControl'

describe('TemplateBrowserFilterControl', () => {
  describe('<TemplateBrowserFilterControl>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TemplateBrowserFilterControl)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TemplateBrowserFilterControl)

      expect(wrapper.attributes()['data-tipe-ui']).toBe(
        'TipeTemplateBrowserFilterControl'
      )
    })

    it('<button> - first button has "on" class by default', () => {
      const wrapper = shallowMount(TemplateBrowserFilterControl)

      expect(wrapper.find('button').classes()).toContain('on')
    })
  })

  describe('@events', () => {
    it('@change - emitted when button clicked', () => {
      const wrapper = shallowMount(TemplateBrowserFilterControl)

      wrapper.find('button').trigger('click')
      expect(wrapper.emitted().change).toBeTruthy()
    })

    it('@click - button has "on" class after clicked', () => {
      const wrapper = shallowMount(TemplateBrowserFilterControl)
      const secondButton = wrapper.findAll('button').at(1)

      expect(secondButton.classes()).not.toContain('on')
      secondButton.trigger('click')
      expect(secondButton.classes()).toContain('on')
    })
  })
})
