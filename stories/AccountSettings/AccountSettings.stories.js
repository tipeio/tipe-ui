import { storiesOf } from '@storybook/vue'

import AccountSettings from '../../src/components/AccountSettings'
import TipeSettings from '../../src/components/AccountSettings/Settings'
import RecentActivity, {
  ActivityItem
} from '../../src/components/AccountSettings/RecentActivity'

const item = () => ({ title: 'Sam Smith update API key', time: '1 hour ago' })
const style = () => ({
  width: '252px'
})

storiesOf('Account Settings', module)
  .add('account settings panel', () => ({
    components: { AccountSettings },
    computed: { style },
    template: '<div :style="style"><account-settings/></div>'
  }))
  .add('recent activity', () => ({
    components: { RecentActivity },
    computed: { style },
    template: '<div :style="style"><recent-activity/></div>'
  }))
  .add('recent activity item', () => ({
    components: { ActivityItem },
    computed: { item, style },
    template: '<div :style="style"><activity-item :item="item"/></div>'
  }))
  .add('settings', () => ({
    components: { TipeSettings },
    computed: { style },
    template: '<div :style="style"><tipe-settings/></div>'
  }))
