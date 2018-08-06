import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import TipeButton from '@/components/Button'

import '@/styles/globals.css'

const notes = `
#### :props
:color | string | primary, success, info, warning, danger, none
:size: | string | mini, small, medium, large
:outline | boolean |
:iconBefore | string |
:iconAfter | string |
#### @events
@click($event)
`

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeButton },
      methods: { click: action('click') },
      data() {
        return {
          color: select(
            'color',
            ['primary', 'success', 'info', 'warning', 'danger', 'none'],
            'primary'
          ),
          size: select('size', ['mini', 'small', 'medium', 'large'], 'medium'),
          outline: boolean('outline'),
          iconBefore: text('iconBefore', ''),
          iconAfter: text('iconAfter', '')
        }
      },
      template: `
      <tipe-button
        @click="click"
        :color="color"
        :size="size"
        :outline="outline"
        :iconBefore="iconBefore"
        :iconAfter="iconAfter"
      >
        Fill Button
      </tipe-button>`
    }))
  )
