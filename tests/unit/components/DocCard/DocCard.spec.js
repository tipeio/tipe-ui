import { shallowMount } from '@vue/test-utils'
import DocCard from '@/components/DocCard'

describe('DocCard.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(DocCard)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(DocCard)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.classes()).toContain('card')
  })
  it('renders correctly with the recent flag', () => {
    const wrapper = shallowMount(DocCard, {
      propsData: { recent: true }
    })
    expect(wrapper).toMatchSnapshot()
    const divArray = wrapper.findAll('div')
    const thirdDiv = divArray.at(3)
    expect(divArray).toHaveLength(4)
    expect(thirdDiv.is('div')).toBe(true)
    expect(thirdDiv.classes()).toContain('dot')
  })
  it('renders with correctly without the recent flag', () => {
    const wrapper = shallowMount(DocCard)
    const divArray = wrapper.findAll('div')
    expect(divArray).toHaveLength(3)
  })
})
