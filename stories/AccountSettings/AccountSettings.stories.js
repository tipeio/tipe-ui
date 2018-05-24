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

const grid = () => ({
  display: 'grid',
  'background-color': 'rgba(255, 255, 255, 0.74)',
  'box-shadow': '0 2px 9px 0 rgba(0, 0, 0, 0.02)',
  width: '252px',
  height: '100vh',
  'align-items': 'start',
  'grid-template-rows': '1rem auto 1rem',
  'grid-template-columns': '1rem auto 1rem',
  'grid-template-areas': `'. . .'
    '. a .'
    '. . .'`
})

storiesOf('Account Settings', module)
  .add('account settings panel', () => ({
    components: { AccountSettings },
    computed: { style },
    template: '<div :style="style"><account-settings/></div>'
  }))
  .add('account settings panel in a grid', () => ({
    components: { AccountSettings },
    computed: { grid },
    template: '<div :style="grid"><account-settings/></div>'
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
