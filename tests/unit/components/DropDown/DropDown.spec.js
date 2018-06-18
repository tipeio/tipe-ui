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
  })
})
