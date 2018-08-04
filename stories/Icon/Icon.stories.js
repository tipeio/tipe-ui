import { storiesOf } from '@storybook/vue'

import TipeIcon from '../../src/components/Icon'

const style = () => ({
  height: '1rem',
  width: '1rem'
})

const icons = [
  'check',
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

storiesOf('Icon', module).add('icons', () => ({
  components: { TipeIcon },
  computed: { style },
  template:
    '<div>' +
    icons.reduce((template, icon) => {
      return (
        template +
        `<tipe-icon :style="style" icon="${icon}" color="rgb(255,0,0)" />`
      )
    }, '') +
    '</div>'
}))
