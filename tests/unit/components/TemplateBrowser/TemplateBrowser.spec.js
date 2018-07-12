import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import TemplateBrowser from '@/components/TemplateBrowser'
import Finder from '@/components/Finder'
import { mocks } from '@tipe/tipe-test-utils'

describe('TemplateBrowser', () => {
  describe('<TemplateBrowser>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TemplateBrowser)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(TemplateBrowser)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTemplateBrowser')
    })
  })

  describe(':props', () => {
    it(':templates - should pass templates to Finder files props', () => {
      const propsData = { templates: [mocks.file()] }
      const wrapper = shallowMount(TemplateBrowser, { propsData })

      expect(wrapper.find(Finder).props().files).toEqual(propsData.templates)
    })
  })
})
