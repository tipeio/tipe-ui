import { storiesOf } from '@storybook/vue'
import TipeModal from '@/components/Modal'

storiesOf('Modal', module).add('empty', () => ({
  components: { TipeModal },
  template: `<tipe-modal />`
}))
