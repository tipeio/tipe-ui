import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import tipeTestUtils from '~/tests/TipeTestUtils'
import Textarea from '@/components/Textarea'
import faker from 'faker'

const props = {
  placeholder: 'Type your name here',
  label: 'Name',
  value: '',
  name: 'name'
}

describe('Textarea', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const renderer = createRenderer()
      const wrapper = shallowMount(Textarea, {
        propsData: {
          ...props
        }
      })
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })

    it('has correct data-tipe-ui attibute', () => {
      const wrapper = shallowMount(Textarea, {
        propsData: {
          ...props
        }
      })
      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeTextarea')
    })
  })

  describe(':props', () => {
    it(':value - should display value', () => {
      const propsData = { value: faker.lorem.sentence() }
      const wrapper = shallowMount(Textarea, { propsData })

      expect(wrapper.element.value).toEqual(propsData.value)
    })

    it(':placeholder - should pass to placeholder attribute', () => {
      const propsData = { placeholder: faker.lorem.sentence() }
      const wrapper = shallowMount(Textarea, { propsData })

      expect(wrapper.attributes().placeholder).toEqual(propsData.placeholder)
    })

    it(':name - should pass to name attribute', () => {
      const propsData = { name: faker.lorem.word() }
      const wrapper = shallowMount(Textarea, { propsData })

      expect(wrapper.attributes().name).toEqual(propsData.name)
    })

    it(':tabindex - should pass to tabindex attribute', () => {
      const propsData = { tabindex: faker.random.number() }
      const wrapper = shallowMount(Textarea, { propsData })

      expect(wrapper.attributes().tabindex).toEqual(`${propsData.tabindex}`)
    })

    tipeTestUtils.test.input.size(Textarea)
    tipeTestUtils.test.input.status(Textarea)
    tipeTestUtils.test.input.waiting(Textarea)
    tipeTestUtils.test.input.disabled(Textarea)
  })

  describe('@events', () => {
    tipeTestUtils.test.input.events(Textarea, wrapper =>
      wrapper.find('textarea')
    )
  })
})
