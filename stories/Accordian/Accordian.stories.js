import { storiesOf } from '@storybook/vue'

import Accordian from '../../src/components/Accordian'
import { ActivityItem } from '../../src/components/AccountSettings/RecentActivity'

const item = () => ({ title: 'Sam Smith update API key', time: '1 hour ago' })
const style = () => ({
  display: 'grid',
  'grid-row-gap': '1rem',
  width: '250px'
})

storiesOf('Accordian', module)
  .add('accordian', () => ({
    components: { Accordian, ActivityItem },
    computed: { item, style },
    template:
      '<div :style="style"><accordian text="Recent Activity"><activity-item :item="item"/></accordian></div>'
  }))
  .add('two accordians', () => ({
    components: { Accordian, ActivityItem },
    computed: { item, style },
    template:
      '<div :style="style"><accordian text="Recent Activity"><activity-item :item="item"/></accordian><accordian text="Recent Activity"><activity-item :item="item"/></accordian></div>'
  }))
