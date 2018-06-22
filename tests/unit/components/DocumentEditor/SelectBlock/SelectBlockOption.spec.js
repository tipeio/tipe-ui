import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SelectBlockOption from '@/components/DocumentEditor/DocumentBlock/SelectBlock/SelectBlockOption'
import Icon from '@/components/Icon'
import faker from 'faker'

describe('SelectBlockOption', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(SelectBlockOption)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(SelectBlockOption)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelectBlockOption')
    })

    it('should render an Icon component', () => {
      const wrapper = shallowMount(SelectBlockOption)

      expect(wrapper.contains(Icon)).toEqual(true)
    })
  })

  describe(':props', () => {
    it(':icon - should pass icon prop to icon component', () => {
      const propsData = { icon: faker.lorem.word() }
      const wrapper = shallowMount(SelectBlockOption, { propsData })

      expect(wrapper.find(Icon).props().icon).toEqual(propsData.icon)
    })

    it(':label - should render label', () => {
      const propsData = { label: faker.lorem.word() }
      const wrapper = shallowMount(SelectBlockOption, { propsData })

      expect(wrapper.find('.label').text()).toEqual(propsData.label)
    })

    it(':label - should render description', () => {
      const propsData = { description: faker.lorem.word() }
      const wrapper = shallowMount(SelectBlockOption, { propsData })

      expect(wrapper.find('.description').text()).toEqual(propsData.description)
    })
  })

  describe('@events', () => {
    it('@click - should emit', () => {
      const wrapper = shallowMount(SelectBlockOption)
      wrapper.trigger('click')

      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
