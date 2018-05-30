import { storiesOf } from '@storybook/vue'

import { TipeTable } from '../../src/components/MembersPanel'

storiesOf('Tipe Table', module).add('member table row', () => ({
  components: { TipeTable },
  computed: { members },
  template: '<tipe-table :members="members"/>'
}))

const members = () => [
  {
    dateJoined: '05/02/2018',
    id: '12',
    name: 'Ada Miller',
    email: 'ada_miller@gmail.com',
    status: 'Active',
    role: 'Owner',
    url: 'http://placekitten.com/200/300'
  },
  {
    dateJoined: '05/02/2018',
    id: '34',
    name: 'Ada Miller',
    email: 'ada_miller@gmail.com',
    status: 'Active',
    role: 'Owner',
    url: 'http://placekitten.com/200/300'
  },
  {
    dateJoined: '05/02/2018',
    id: '56',
    name: 'Ada Miller',
    email: 'ada_miller@gmail.com',
    status: 'Active',
    role: 'Owner',
    url: 'http://placekitten.com/200/300'
  },
  {
    dateJoined: '05/02/2018',
    id: '78',
    name: 'Ada Miller',
    email: 'ada_miller@gmail.com',
    status: 'Active',
    role: 'Owner',
    url: 'http://placekitten.com/200/300'
  },
  {
    dateJoined: '05/02/2018',
    id: '90',
    name: 'Ada Miller',
    email: 'ada_miller@gmail.com',
    status: 'Active',
    role: 'Owner',
    url: 'http://placekitten.com/200/300'
  }
]
