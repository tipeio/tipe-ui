import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'
import Sidebar from '@/components/Sidebar'
import SidebarLink from '@/components/Sidebar/SidebarLink.vue'
import faker from 'faker'

const createLink = () => ({
  icon: faker.lorem.word(),
  url: faker.internet.url(),
  active: faker.random.boolean()
})

describe('Sidebar', () => {
  describe('<template>', () => {
    it('matches previous snapshot', async () => {
      const wrapper = shallowMount(Sidebar)
      await expect(
        createRenderer().renderToString(wrapper.vm)
      ).toMatchSnapshot()
    })

    it('has correct data-tipe-iu attibute', () => {
      const wrapper = shallowMount(Sidebar)

      expect(wrapper.attributes()['data-tipe-ui']).toBe('TipeSidebar')
    })
  })

  describe(':props', () => {
    it(':links - should render links', () => {
      const propsData = { links: [createLink(), createLink()] }
      const wrapper = shallowMount(Sidebar, { propsData })
      const links = wrapper.findAll(SidebarLink)

      expect(links.at(0).props()).toEqual(
        expect.objectContaining(propsData.links[0])
      )

      expect(links.at(1).props()).toEqual(
        expect.objectContaining(propsData.links[1])
      )
    })
  })
})
