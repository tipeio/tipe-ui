import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import tipeTestUtils from '~/tests/TipeTestUtils'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

describe('Button.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(Button)
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('has correct data-tipe-iu attibute', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeButton')
  })

  tipeTestUtils.test.input.size(Button)
  tipeTestUtils.test.input.status(Button)
  tipeTestUtils.test.input.waiting(Button)
  tipeTestUtils.test.input.disabled(Button)

  it(':color(primary) - has primary class', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'primary' }
    })

    expect(wrapper.classes()).toContain('primary')
  })
  it(':color(none) - has none class', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'none' }
    })

    expect(wrapper.classes()).toContain('none')
  })
  it(':iconBefore - renders icon before', () => {
    const propsData = { iconBefore: 'plus' }
    const wrapper = shallowMount(Button, { propsData })

    expect(wrapper.contains('.icon-container')).toEqual(true)
    expect(wrapper.classes()).toContain('has_icon_before')
    expect(wrapper.contains(Icon)).toEqual(true)
    expect(wrapper.find(Icon).props().icon).toEqual(propsData.iconBefore)
  })

  it(':iconAfter - renders icon after', () => {
    const propsData = { iconAfter: 'plus' }
    const wrapper = shallowMount(Button, { propsData })

    expect(wrapper.contains('.icon-container')).toEqual(true)
    expect(wrapper.classes()).toContain('has_icon_after')
    expect(wrapper.contains(Icon)).toEqual(true)
    expect(wrapper.find(Icon).props().icon).toEqual(propsData.iconAfter)
  })

  it('@click - should emit', () => {
    const wrapper = shallowMount(Button)

    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        color: 'danger',
        iconAfter: 'plus',
        iconBefore: 'arrow-down',
        size: 'large'
      }
    })
    expect(wrapper.props().color).toBe('danger')
    expect(wrapper.props().iconAfter).toBe('plus')
    expect(wrapper.props().iconBefore).toBe('arrow-down')
    expect(wrapper.props().size).toBe('large')
  })
})
