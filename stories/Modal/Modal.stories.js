import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeModal from '@/components/Modal'

const notes = `
#### @actions
@close()
`

storiesOf('Modal', module).add(
  'empty',
  withMarkdownNotes(notes)(() => ({
    components: { TipeModal },
    methods: {
      close: action('close')
    },
    template: `<tipe-modal @close="close" />`
  }))
)
