import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import DocCard from '@/components/DocCard'

describe('DocCard.vue', () => {
  it('matches previous snapshot', async () => {
    const wrapper = shallowMount(DocCard)
    await expect(createRenderer().renderToString(wrapper.vm)).toMatchSnapshot()
  })
  it('renders with the correct class', () => {
    const wrapper = shallowMount(DocCard)
    expect(wrapper.classes()).toContain('card')
  })
  it('renders correctly with the recent flag', () => {
    const wrapper = shallowMount(DocCard, {
      propsData: { recent: true }
    })
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
