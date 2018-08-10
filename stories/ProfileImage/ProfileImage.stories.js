import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeProfileImage from '../../src/components/ProfileImage'

const notes = `
#### :props
:url | string |
`

storiesOf('Profile Image', module)
  .addDecorator(withKnobs)
  .add(
    'has profile image',
    withMarkdownNotes(notes)(() => ({
      components: { TipeProfileImage },
      data() {
        return {
          url: text('url', 'http://placekitten.com/200/300')
        }
      },
      template: `
      <tipe-profile-image
        :url="url"
      />`
    }))
  )
