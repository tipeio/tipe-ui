import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'

import { TableRow } from '@/components/MembersPanel'

const style = () => ({
  width: '1055px'
})

const member = () => mocks.createManyMocks(mocks.user, 1)

storiesOf('Table Row', module).add('member table row', () => ({
  components: { TableRow },
  computed: { member, style },
  template: '<div :style="style"><table-row :member="member[0]"/></div>'
}))
