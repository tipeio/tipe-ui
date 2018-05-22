import { storiesOf } from '@storybook/vue'

import Accordian from '../../src/components/Accordian'
import ActivityItem from '../../src/components/RecentActivity/ActivityItem'

storiesOf('Accordian', module).add('accordian', () => ({
  components: { Accordian, ActivityItem },
  template:
    '<accordian  text="Recent Activity"><activity-item title="Sam Smith update api key" time="a moment ago"/><activity-item title="Sam Smith update api key" time="a moment ago"/></accordian>'
}))
