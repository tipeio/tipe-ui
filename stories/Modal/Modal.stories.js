import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeModal from '@/components/Modal'

const notes = `
#### :props
:height | string |
:width | string |
#### @actions
@close()
`

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'empty',
    withMarkdownNotes(notes)(() => ({
      components: { TipeModal },
      methods: {
        close: action('close')
      },
      data() {
        return {
          height: text('height', '15rem'),
          width: text('width', '15rem')
        }
      },
      template: `
        <tipe-modal
          @close="close"
          :height="height"
          :width="width"
        />`
    }))
  )
