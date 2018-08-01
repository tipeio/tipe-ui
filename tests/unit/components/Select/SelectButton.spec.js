import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import selectTests from './selectTests'

import TipeSelectButton from '@/components/Select/SelectButton'

const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' }
]

const props = {
  options
}
describe('TipeSelectButton.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(TipeSelectButton, {
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
    const wrapper = shallowMount(TipeSelectButton, {
      propsData: {
        ...props
      }
    })
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelectButton')
  })
  selectTests(TipeSelectButton)
})
