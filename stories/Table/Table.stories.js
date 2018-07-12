import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'

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

const members = () => mocks.createManyMocks(mocks.user, 7)
