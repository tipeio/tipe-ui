import { storiesOf } from '@storybook/vue'
import TipeSidebar from '../../src/components/Sidebar'
import faker from 'faker'

const createLink = () => ({
  icon: 'image',
  label: faker.lorem.word(),
  url: faker.internet.url()
})

storiesOf('Sidebar', module).add('default', () => ({
  components: { TipeSidebar },
  data() {
    return {
      links: [createLink(), createLink(), createLink()]
    }
  },
  computed: {
    styleObj: () => ({
      height: '500px'
    })
  },
  template: '<div :style="styleObj"><tipe-sidebar :links="links" /></div>'
}))
