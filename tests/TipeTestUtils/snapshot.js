import { createRenderer } from 'vue-server-renderer'
import { shallowMount } from '@vue/test-utils'

export default (component, options = {}) =>
  it('matches previous snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(component, options)

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
