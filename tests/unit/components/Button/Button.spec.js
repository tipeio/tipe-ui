import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Button from '@/components/Button'

describe('Button.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(Button)
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })

  it('renders a defaut button', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.classes()).toContain('default')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a default outline button', () => {
    const wrapper = shallowMount(Button, { propsData: { outline: true } })
    expect(wrapper.classes()).toContain('outline')
    expect(wrapper.classes()).toContain('default')
    expect(wrapper.classes()).toContain('medium')
  })
  it('should render a small button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'small' }
    })
    expect(wrapper.classes()).toContain('default')
    expect(wrapper.classes()).toContain('small')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a medium button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'medium' }
    })
    expect(wrapper.classes()).toContain('default')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a large button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('default')
    expect(wrapper.classes()).toContain('large')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a purple button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'primary' }
    })
    expect(wrapper.classes()).toContain('primary')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a small purple outline button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'primary', outline: true, size: 'small' }
    })
    expect(wrapper.classes()).toContain('primary')
    expect(wrapper.classes()).toContain('small')
    expect(wrapper.classes()).toContain('outline')
  })
  it('should emit an onclick event', () => {
    const action = jest.fn()
    const wrapper = shallowMount(Button, {
      propsData: { '@click': action }
    })
    wrapper.setMethods({ action: action('clicked') })
    wrapper.trigger('click')
    expect(action.mock.calls).toHaveLength(1)
  })
})
