import { storiesOf } from '@storybook/vue'
import TipeNewFile from '@/components/NewFile'
import { mocks } from '@tipe/tipe-test-utils'

storiesOf('NewFile', module).add('default', () => ({
  components: { TipeNewFile },
  computed: {
    templates() {
      return [
        mocks.file({ type: 'document' }),
        mocks.file({ type: 'document' })
      ]
    },
    folders() {
      return [mocks.file({ type: 'folder' }), mocks.file({ type: 'folder' })]
    },
    styleObj() {
      return {
        height: '500px',
        width: '500px'
      }
    }
  },
  template: `
      <div :style="styleObj">
        <tipe-new-file :templates="templates" :folders="folders"/>
      </div>`
}))
