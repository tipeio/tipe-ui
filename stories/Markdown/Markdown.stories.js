import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeMarkdown from '@/components/Markdown'

const notes = `
#### :props
:preview | boolean |
:value | text |
#### @event
@change(value)
`

storiesOf('Markdown', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeMarkdown },
      data() {
        return {
          value: text('value', 'i am a ~~tast~~ **test**.'),
          preview: boolean('preview', true),
          size: select('size', ['small', 'medium', 'large'], 'small'),
          containerStyleObj: { width: '25rem' }
        }
      },
      template: `
        <div :style="containerStyleObj">
          <tipe-markdown
            :value="value"
            :preview="preview"
            :size="size"
          />
        </div>`
    }))
  )
