import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'
import TipeBreadcrumbs from '../../src/components/Breadcrumbs'
import faker from 'faker'

const createLink = link => ({
  label: faker.lorem.word(),
  name: faker.lorem.word(),
  ...link
})

const notes = `
#### :props
:links | { name: string, label: string, icon: string } |
#### @events
@click(link.name)
`

storiesOf('Breadcrumbs', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeBreadcrumbs },
      methods: { click: action('click') },
      data() {
        return {
          links: object('links', [
            createLink({ icon: 'document' }),
            createLink({ icon: 'folder' }),
            createLink()
          ])
        }
      },
      template: '<tipe-breadcrumbs @click="click" :links="links" />'
    }))
  )
