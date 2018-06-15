import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Topbar from '@/components/Topbar'

describe('Topbar', () => {
  describe('<template>', () => {
    it('matches previous snapshot', async () => {
      const wrapper = shallowMount(Topbar)
      await expect(
        createRenderer().renderToString(wrapper.vm)
      ).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Topbar)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTopbar')
    })
  })
})
