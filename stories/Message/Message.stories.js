import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeMessage from '@/components/Message'

const notes = `
#### :props
:state | string | success, warning, error
:successMessage | string |
:warningMessage | string |
:errorMessage | string |
`

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeMessage },
      data() {
        return {
          status: select(
            'status',
            ['', 'success', 'warning', 'error'],
            'success'
          ),
          successMessage: text('successMessage', 'Yay! everything is ok!'),
          warningMessage: text(
            'warningMessage',
            'Hmmm, something is fishy here'
          ),
          errorMessage: text('errorMessage', 'Ooops! something went wrong')
        }
      },
      template: `
        <tipe-message
          :status="status"
          :successMessage="successMessage"
          :warningMessage="warningMessage"
          :errorMessage="errorMessage"
        />`
    }))
  )
