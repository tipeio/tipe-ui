import { shallowMount } from '@vue/test-utils'
import FinderViewer from '@/components/Finder/FinderViewer.vue'
import FinderIcon from '@/components/Finder/FileIcon.vue'
import faker from 'faker'

const createFile = () => ({
  label: faker.lorem.word(),
  type: ['document', 'folder'][faker.random.number(1)]
})

describe('FinderViewer', () => {
  describe('<template>', () => {
    it('matches previous snapshot', () => {
      const wrapper = shallowMount(FinderViewer)

      expect(wrapper).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(FinderViewer)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeFinder')
    })
  })

  describe(':props', () => {
    it(':files - should pass file to FinderIcon component', () => {
      const propsData = { files: [createFile()] }
      const wrapper = shallowMount(FinderViewer, { propsData })

      expect(wrapper.find(FinderIcon).props().file).toMatchObject(
        propsData.files[0]
      )
    })

    it(':layout(grid) - should pass layout prop to layout class', () => {
      const propsData = { layout: 'grid' }
      const wrapper = shallowMount(FinderViewer, { propsData })

      expect(wrapper.find('.layout').classes()).toContain(propsData.layout)
    })
  })
})
