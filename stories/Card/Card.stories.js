import { storiesOf } from '@storybook/vue'
import TipeCard from '@/components/Card'

storiesOf('Card', module).add('default', () => ({
  components: { TipeCard },
  data() {
    return {
      styleObj: {
        height: '20rem',
        width: '20rem'
      }
    }
  },
  template: `
    <div :style="styleObj">
      <tipe-card/>
    </div>
  `
}))
