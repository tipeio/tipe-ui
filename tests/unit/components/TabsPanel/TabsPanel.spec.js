import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TabsPanel from '@/components/TabsPanel'

describe('TabsMenu', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TabsPanel)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('<root> - has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TabsPanel)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTabsPanel')
    })
  })
})
