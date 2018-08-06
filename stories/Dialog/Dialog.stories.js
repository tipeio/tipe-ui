import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeDialog from '../../src/components/Dialog'

const notes = `
#### :props
:title | string |
:message | string |
#### @events
@cancel()
@continue()
`

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeDialog },
      data() {
        return {
          title: text('title', 'Hello World'),
          message: text('message', 'Say hello back')
        }
      },
      methods: {
        cancel: action('cancel'),
        ok: action('continue')
      },
      template: `
      <tipe-dialog
        @cancel="cancel"
        @continue="ok"
        :title="title"
        :message="message"
      />`
    }))
  )
