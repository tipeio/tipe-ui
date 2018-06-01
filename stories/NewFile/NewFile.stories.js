import { storiesOf } from '@storybook/vue'
import TipeNewFile from '@/components/NewFile'
import fileMock from '@/mocks/File'

storiesOf('NewFile', module).add('default', () => ({
  components: { TipeNewFile },
  computed: {
    templates() {
      return [fileMock({ type: 'document' }), fileMock({ type: 'document' })]
    },
    folders() {
      return [fileMock({ type: 'folder' }), fileMock({ type: 'folder' })]
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
