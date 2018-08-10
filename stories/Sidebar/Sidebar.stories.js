import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import TipeSidebar from '../../src/components/Sidebar'
import { mocks } from '@tipe/tipe-test-utils'

const notes = `
#### :props
:links | interfaces.navLink |
`

const links = [
  mocks.navLink({ icon: 'document' }),
  mocks.navLink({ icon: 'folder' }),
  mocks.navLink({ icon: 'media' }),
  mocks.navLink({ icon: 'gear' })
]

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeSidebar },
      data() {
        return {
          links: object('link', links)
        }
      },
      computed: {
        styleObj: () => ({
          height: '500px'
        })
      },
      template: `
        <div :style="styleObj">
          <tipe-sidebar
            :links="links"
          />
        </div>`
    }))
  )
