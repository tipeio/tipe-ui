import { storiesOf } from '@storybook/vue'
import { withKnobs, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeProgress from '../../src/components/Progress'

const notes = `
#### :props
:value | number
:max | number
`

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeProgress },
      data() {
        return {
          value: number('value', 56),
          max: number('max', 100)
        }
      },
      template: `
        <tipe-progress
          :value="value"
          :max="max"
        />`
    }))
  )
