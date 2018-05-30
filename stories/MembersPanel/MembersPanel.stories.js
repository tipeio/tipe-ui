import { storiesOf } from '@storybook/vue'

import MembersPanel from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px',
  height: '801px'
})
storiesOf('Members Panel', module).add('members panel', () => ({
  components: { MembersPanel },
  computed: { style },
  template: '<div :style="style"><members-panel /></div>'
}))
