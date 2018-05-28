import { storiesOf } from '@storybook/vue'
import TipeBreadcrumbs from '../../src/components/Breadcrumbs'
import faker from 'faker'

const createLink = () => ({
  label: faker.lorem.word(),
  url: faker.internet.url()
})

storiesOf('Breadcrumbs', module).add('default', () => ({
  components: { TipeBreadcrumbs },
  data() {
    return {
      links: [createLink(), createLink(), createLink()]
    }
  },
  template: '<tipe-breadcrumbs :links="links" />'
}))
