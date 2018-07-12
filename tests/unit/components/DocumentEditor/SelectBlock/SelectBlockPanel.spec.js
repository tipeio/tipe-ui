import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import SelectBlockOption from '@/components/DocumentEditor/DocumentBlock/SelectBlock/SelectBlockOption'
import SelectBlockPanel from '@/components/DocumentEditor/DocumentBlock/SelectBlock/SelectBlockPanel'
import { mocks } from '@tipe/tipe-test-utils'

describe('SelectBlockPanel', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(SelectBlockPanel)

      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(SelectBlockPanel)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSelectBlockPanel')
    })
  })

  describe(':props', () => {
    it(':options - should render options', () => {
      const propsData = { options: mocks.createManyMocks(mocks.blockOption, 3) }
      const wrapper = shallowMount(SelectBlockPanel, { propsData })

      expect(wrapper.findAll(SelectBlockOption)).toHaveLength(3)
    })

    it(':options.icon - should pass the SelectBlockOption component as icon prop', () => {
      const propsData = { options: mocks.createManyMocks(mocks.blockOption, 1) }
      const wrapper = shallowMount(SelectBlockPanel, { propsData })

      expect(wrapper.find(SelectBlockOption).props().icon).toEqual(
        propsData.options[0].icon
      )
    })

    it(':options.label - should pass the SelectBlockOption component as label prop', () => {
      const propsData = { options: mocks.createManyMocks(mocks.blockOption, 1) }
      const wrapper = shallowMount(SelectBlockPanel, { propsData })

      expect(wrapper.find(SelectBlockOption).props().label).toEqual(
        propsData.options[0].label
      )
    })

    it(':options.description - should pass the SelectBlockOption component as description prop', () => {
      const propsData = { options: mocks.createManyMocks(mocks.blockOption, 1) }
      const wrapper = shallowMount(SelectBlockPanel, { propsData })

      expect(wrapper.find(SelectBlockOption).props().description).toEqual(
        propsData.options[0].description
      )
    })
  })
})
