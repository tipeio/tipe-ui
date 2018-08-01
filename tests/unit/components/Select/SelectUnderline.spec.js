import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import selectTests from './selectTests'

import TipeSelectUnderline from '@/components/Select/SelectUnderline'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]

const props = {
  options
}
describe('TipeSelectUnderline.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSelectUnderline, {
      propsData: {
        ...props
      }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(TipeSelectUnderline, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelectUnderline')
  })
  selectTests(TipeSelectUnderline)
})
