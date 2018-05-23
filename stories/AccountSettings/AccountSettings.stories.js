import { storiesOf } from '@storybook/vue'

import AccountSettings from '../../src/components/AccountSettings'

storiesOf('Account Settings', module).add('account settings panel', () => ({
  components: { AccountSettings },
  template: '<account-settings/>'
}))
