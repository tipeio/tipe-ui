import { storiesOf } from '@storybook/vue'

import ConfirmModal from '../../src/components/ConfirmModal'

const style = () => ({
  width: '100vw',
  height: '100vh',
  'background-color': 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center'
})

storiesOf('Confirm Modal', module).add('confirm modal', () => ({
  components: { ConfirmModal },
  computed: { style },
  template:
    '<div :style="style"><confirm-modal title="Delete Member?" subtitle="Are you sure you want to delete this member from the member list?" buttonText="DELETE"/></div>'
}))
