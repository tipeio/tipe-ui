import { storiesOf } from '@storybook/vue'
import { createManyMocks, user } from '../../src/mocks'

import { TipeTable } from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px',
  height: '737px'
})

storiesOf('Tipe Table', module).add('member table row', () => ({
  components: { TipeTable },
  computed: { members, style },
  template: '<div :style="style"><tipe-table :members="members"/></div>'
}))

const members = () => createManyMocks(user, 7)
