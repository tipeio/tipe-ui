import { storiesOf } from '@storybook/vue'

import TipeIcon from '../../src/components/Icon'
import { withKnobs, select, number, color } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

const icons = [
  'check-circle',
  'document',
  'folder',
  'key',
  'number',
  'share',
  'switch',
  'user',
  'color',
  'edit',
  'gear',
  'link',
  'pin',
  'sign-out',
  'text',
  'view',
  'copy',
  'flow',
  'grid',
  'list',
  'search',
  'star-active',
  'trash',
  'wrench',
  'credit-card',
  'folder-open',
  'group',
  'markdown',
  'media',
  'send',
  'star',
  'user-circle',
  'options',
  'plus',
  'cross',
  'arrow-down',
  'arrow-up',
  'arrow-right',
  'arrow-left'
]

const notes = `
#### :props
:icon | string |
:height | number |
:width | number |
:color | string |
`

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withMarkdownNotes(notes)(() => ({
      components: { TipeIcon },
      data() {
        return {
          icon: select('icon', icons, 'document'),
          height: number('height', 1),
          width: number('width', 1),
          color: color('color', '#000')
        }
      },
      computed: {
        h: data => `${data.height}rem`,
        w: data => `${data.width}rem`
      },
      template: `
      <tipe-icon
        :icon="icon"
        :height="h"
        :width="w"
        :color="color"
      />`
    }))
  )
