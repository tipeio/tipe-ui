import { storiesOf } from '@storybook/vue'

import { AddMember } from '../../src/components/MembersPanel'

const style = () => ({
  width: '100vw',
  height: '100vh',
  'background-color': 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center'
})

storiesOf('Add Member', module).add('add member form', () => ({
  components: { AddMember },
  computed: { style },
  template: '<div :style="style"><add-member/></div>'
}))
