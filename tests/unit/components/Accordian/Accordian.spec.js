import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Accordian from '@/components/Accordian'
import Icon from '@/components/Icon'

describe('Accordian.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(Accordian, {
      propsData: {
        text: 'My Stuff'
      }
    })
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('should have the content classs', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: {
        text: 'My Stuff'
      }
    })
    expect(wrapper.classes()).toContain('content')
  })
  it('should have the correct uppercased title', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: {
        text: 'My Stuff'
      }
    })
    expect(wrapper.find('.title').text()).toBe('MY STUFF')
  })
  it('should render the icon component', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: {
        text: 'My Stuff'
      }
    })
    expect(wrapper.contains(Icon)).toBe(true)
  })
  it('should not render the slotOpen class by default', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: {
        text: 'My Stuff'
      }
    })
    expect(wrapper.find('.slotOpen').exists()).toBe(false)
  })
  it('should show slot onClick', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: { text: 'Settings' }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.slotOpen').exists()).toBe(true)
  })
  it('should toggle the slot', () => {
    const wrapper = shallowMount(Accordian, {
      propsData: { text: 'Settings' }
    })
    wrapper.trigger('click')
    expect(wrapper.find('.slotOpen').exists()).toBe(true)
    wrapper.trigger('click')
    expect(wrapper.find('.slotOpen').exists()).toBe(false)
  })
})
