import { storiesOf } from '@storybook/vue'
import { createManyMocks, user } from '../../src/mocks'
import MembersPanel from '../../src/components/MembersPanel'

const style = () => ({
  width: '1055px',
  height: '801px'
})

const members = () => createManyMocks(user, 12)

storiesOf('Members Panel', module).add('members panel', () => ({
  components: { MembersPanel },
  computed: { style, members },
  template: '<div :style="style"><members-panel :members="members" /></div>'
}))
