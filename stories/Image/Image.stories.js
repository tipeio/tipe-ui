import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeImage from '../../src/components/Image'

const notes = `
#### :props
:url | string |
:alt | string |
`

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeImage },
      data() {
        return {
          style: {
            height: '100px',
            width: '100px'
          },
          url: text('url', 'http://placekitten.com/200/200'),
          alt: text('alt', 'image of kitten')
        }
      },
      template: `
        <tipe-image
          :url="url"
          :alt="alt"
          :style="style"
        />`
    }))
  )
