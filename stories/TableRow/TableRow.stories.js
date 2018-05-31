import { storiesOf } from '@storybook/vue'
import { createManyMocks, user } from '../../src/mocks'

import { TableRow } from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px'
})

const member = () => createManyMocks(user, 1)

storiesOf('Table Row', module).add('member table row', () => ({
  components: { TableRow },
  computed: { member, style },
  template: '<div :style="style"><table-row :member="member[0]"/></div>'
}))
