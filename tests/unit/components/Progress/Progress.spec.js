import { shallowMount } from '@vue/test-utils'
import Progress from '@/components/Progress'

describe('Progress.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        total: 100,
        used: 20,
        title: 'Progress'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  it('should have the column class', () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        total: 100,
        used: 20,
        title: 'Progress'
      }
    })
    expect(wrapper.classes()).toContain('column')
  })
  it('should have the correct props', () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        total: 100,
        used: 20,
        title: 'Progress',
        unit: 'GB'
      }
    })
    expect(wrapper.props().total).toBe(100)
    expect(wrapper.props().used).toBe(20)
    expect(wrapper.props().title).toBe('Progress')
    expect(wrapper.props().unit).toBe('GB')
  })
  it('should have the correct title and subtitle', () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        total: 100,
        used: 20,
        title: 'Progress',
        unit: 'GB'
      }
    })
    expect(wrapper.find('.title').text()).toBe('Progress')
    expect(wrapper.find('.subtitle').text()).toBe('20GB / 100GB')
  })
  it('should calculate the correct percent', () => {
    const wrapper = shallowMount(Progress, {
      propsData: {
        total: 100,
        used: 20,
        title: 'Progress',
        unit: 'GB'
      }
    })
    expect(wrapper.find('.column-end-20').exists()).toBe(true)
  })
})
