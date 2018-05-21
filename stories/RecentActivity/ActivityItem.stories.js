import { storiesOf } from '@storybook/vue'

import ActivityItem from '../../src/components/RecentActivity/ActivityItem.vue'

storiesOf('ActivityItem', module).add('activity item', () => ({
  components: { ActivityItem },
  template:
    '<activity-item  title="Sam Smith update API key" time="1 hour ago"/>'
}))
