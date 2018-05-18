import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button.vue', () => {
  it('renders a defaut button', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a default outline button', () => {
    const wrapper = shallowMount(Button, { propsData: { outline: true } })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('outline')
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('medium')
  })
  it('should render a small button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'small' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('small')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a medium button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'medium' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a large button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { size: 'large' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('large')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a purple button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'purple' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a dark purple button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'dark-purple' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('dark-purple')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a danger button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'danger' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('danger')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
  })
  it('should render a danger outline button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { outline: true, color: 'danger' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('danger')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).toContain('outline')
  })
  it('should render a small purple outline button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'purple', outline: true, size: 'small' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('purple')
    expect(wrapper.classes()).toContain('small')
    expect(wrapper.classes()).toContain('outline')
  })
  it('should render a medium dark purple button', () => {
    const wrapper = shallowMount(Button, {
      propsData: { color: 'dark-purple', size: 'medium' }
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('dark-purple')
    expect(wrapper.classes()).toContain('medium')
    expect(wrapper.classes()).not.toContain('outline')
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
