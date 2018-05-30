import { storiesOf } from '@storybook/vue'

import { TableRow } from '../../src/components/MembersPanel'

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
  computed: { member },
  template: '<table-row :member="member"/>'
}))
