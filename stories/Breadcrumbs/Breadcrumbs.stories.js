import { storiesOf } from '@storybook/vue'
import TipeBreadcrumbs from '../../src/components/Breadcrumbs'
import faker from 'faker'

const createLink = link => ({
  label: faker.lorem.word(),
  ...link
})

storiesOf('Breadcrumbs', module).add('default', () => ({
  components: { TipeBreadcrumbs },
  data() {
    return {
      links: [
        createLink({ icon: 'document' }),
        createLink({ icon: 'folder' }),
        createLink()
      ]
    }
  },
  template: '<tipe-breadcrumbs :links="links" />'
}))
