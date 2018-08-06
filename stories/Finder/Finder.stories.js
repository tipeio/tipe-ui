import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'
import { withKnobs, select, object } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeFinder from '@/components/Finder'

const createStyle = () => ({
  height: '500px',
  width: '700px'
})

const files = mocks.createManyMocks(() => mocks.file({ icon: 'document' }), 7)

const notes = `
#### :props
:layout | string | grid, list
:icon | string | rectangle, square, details
:files | [object] | interfaces.file
#### @events
@select(file)
`

storiesOf('Finder', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeFinder },
      data() {
        return {
          layout: select('layout', ['grid', 'list'], 'list'),
          icon: select('icon', ['rectangle', 'square', 'details'], 'rectangle'),
          files: object('files', files),
          styleObject: createStyle()
        }
      },
      methods: { action },
      template: `
      <tipe-finder
        @select="file => action('select')(file)"
        :layout="layout"
        :icon="icon"
        :style="styleObject"
        :files="files"
      />
    `
    }))
  )
