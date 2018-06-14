import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SettingsMenu from '@/components/SettingsMenu'
import Icon from '@/components/Icon'

describe('SettingsMenu.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(SettingsMenu)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('renders the correct number of list items', () => {
    const wrapper = shallowMount(SettingsMenu)
    const liArr = wrapper.findAll('li')
    expect(liArr).toHaveLength(5)
  })
  it('renders list items with icons', () => {
    const wrapper = shallowMount(SettingsMenu)
    const liArr = wrapper.findAll('li')
    expect(
      liArr
        .at(0)
        .find(Icon)
        .exists()
    ).toBe(true)
    expect(
      liArr
        .at(1)
        .find(Icon)
        .exists()
    ).toBe(true)
    expect(
      liArr
        .at(2)
        .find(Icon)
        .exists()
    ).toBe(true)
    expect(
      liArr
        .at(3)
        .find(Icon)
        .exists()
    ).toBe(true)
    expect(
      liArr
        .at(4)
        .find(Icon)
        .exists()
    ).toBe(true)
  })
})
