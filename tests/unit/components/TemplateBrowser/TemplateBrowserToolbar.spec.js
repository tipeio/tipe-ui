import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TemplateBrowserToolbar from '@/components/TemplateBrowser/TemplateBrowserToolbar'

describe('TemplateBrowserToolbar', () => {
  describe('<TemplateBrowserToolbar>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TemplateBrowserToolbar)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TemplateBrowserToolbar)

      expect(wrapper.attributes()['data-tipe-ui']).toBe(
        'TipeTemplateBrowserToolbar'
      )
    })
  })
})
