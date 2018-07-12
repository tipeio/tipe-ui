import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'
import MembersPanel from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px',
  height: '801px'
})

const members = () => mocks.createManyMocks(mocks.user, 12)

storiesOf('Members Panel', module).add('members panel', () => ({
  components: { MembersPanel },
  computed: { style, members },
  template: '<div :style="style"><members-panel :members="members" /></div>'
}))
