import { shallowMount } from '@vue/test-utils'
import FinderContainer from '@/components/Finder/FinderContainer'
import FinderEmpty from '@/components/Finder/FinderEmpty.vue'
import FinderViewer from '@/components/Finder/FinderViewer.vue'
import faker from 'faker'

const createFile = () => ({
  label: faker.lorem.word(),
  type: ['document', 'folder'][faker.random.number(1)]
})

describe('FinderContainer', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(FinderContainer)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe(':props', () => {
    it(':files(empty) - should render FinderEmpty componet', () => {
      const wrapper = shallowMount(FinderContainer)

      expect(wrapper.find(FinderEmpty).exists()).toBe(true)
    })

    it(':files(not empty) - should render FinderViewer component', () => {
      const propsData = { files: [createFile()] }
      const wrapper = shallowMount(FinderContainer, { propsData })

      expect(wrapper.find(FinderViewer).exists()).toBe(true)
    })

    it(':layout(grid) - should pass layout prop to FinderViewer component', () => {
      const propsData = { files: [createFile()], layout: 'grid' }
      const wrapper = shallowMount(FinderContainer, { propsData })

      expect(wrapper.find(FinderViewer).props().layout).toBe('grid')
    })

    it(':layout - should default to list', () => {
      const propsData = { files: [createFile()] }
      const wrapper = shallowMount(FinderContainer, { propsData })

      expect(wrapper.find(FinderViewer).props().layout).toBe('list')
    })
  })
})
