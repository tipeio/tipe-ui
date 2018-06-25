import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import tipeTestUtils from '~/tests/TipeTestUtils'
import TipeSwitch from '@/components/Switch'

const propsData = {
  label: 'Share Location',
  name: 'location'
}

describe('Switch', () => {
  describe('<template>', () => {
    it('renders', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(TipeSwitch, { propsData })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(TipeSwitch, { propsData })
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSwitch')
    })
  })

  describe(':props', () => {
    it(':label - should render', () => {
      const wrapper = shallowMount(TipeSwitch, { propsData })
      expect(wrapper.find('.label').text()).toBe(propsData.label)
    })

    it(':value - should pass to checked attribute', () => {
      const wrapper = shallowMount(TipeSwitch, {
        propsData: { ...propsData, value: true }
      })

      expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true)
    })

    tipeTestUtils.test.input.size(TipeSwitch, wrapper =>
      wrapper.find('.switch')
    )

    tipeTestUtils.test.input.status(TipeSwitch, wrapper =>
      wrapper.find('.wrapper')
    )

    tipeTestUtils.test.input.waiting(TipeSwitch, wrapper =>
      wrapper.find('input[type="checkbox"]')
    )

    tipeTestUtils.test.input.disabled(TipeSwitch, wrapper =>
      wrapper.find('input[type="checkbox"]')
    )
  })

  describe('@events', () => {
    tipeTestUtils.test.input.events(TipeSwitch, wrapper =>
      wrapper.find('input[type="checkbox"]')
    )
  })
})
