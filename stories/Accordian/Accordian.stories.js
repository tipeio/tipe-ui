import { storiesOf } from '@storybook/vue'

import Accordian from '../../src/components/Accordian'

const item = () => ({ title: 'Sam Smith update API key', time: '1 hour ago' })
const style = () => ({
  display: 'grid',
  'grid-row-gap': '1rem',
  width: '250px'
})

storiesOf('Accordian', module)
  .add('accordian', () => ({
    components: { Accordian },
    computed: { item, style },
    template:
      '<div :style="style"><accordian text="Recent Activity"><div>Hello World</div></accordian></div>'
  }))
  .add('two accordians', () => ({
    components: { Accordian },
    computed: { item, style },
    template:
      '<div :style="style"><accordian text="Recent Activity"><div>Hello World</div></accordian><accordian text="Recent Activity"><activity-item :item="item"/></accordian></div>'
  }))
