import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import tipeTestUtils from '~/tests/TipeTestUtils'
import TipeTextInput from '@/components/TextInput'

const props = {
  placeholder: 'Type your name here',
  label: 'Name',
  value: '',
  name: 'name'
}

describe('TextInput', () => {
  describe('<template>', () => {
    it('renders', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TipeTextInput, {
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
      const wrapper = shallowMount(TipeTextInput, {
        propsData: {
          ...props
        }
      })
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTextInput')
    })
  })

  describe(':props', () => {
    tipeTestUtils.test.input.size(TipeTextInput)
    tipeTestUtils.test.input.status(TipeTextInput)
    tipeTestUtils.test.input.waiting(TipeTextInput)
    tipeTestUtils.test.input.disabled(TipeTextInput)
  })

  describe('@events', () => {
    tipeTestUtils.test.input.events(TipeTextInput)
  })
})
