import { storiesOf } from '@storybook/vue'

import { TableRow } from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px'
})

const member = () => ({
  dateJoined: '05/02/2018',
  name: 'Ada Miller',
  email: 'ada_miller@gmail.com',
  status: 'Active',
  role: 'Owner',
  url: 'http://placekitten.com/200/300'
})

storiesOf('Table Row', module).add('member table row', () => ({
  components: { TableRow },
  computed: { member, style },
  template: '<div :style="style"><table-row :member="member"/></div>'
}))
