import { storiesOf } from '@storybook/vue'
import TipeDocumentEditor from '@/components/DocumentEditor'
import { mocks } from '@tipe/tipe-test-utils'

const blocks = [
  mocks.documentBlock({
    type: 'BOOLEAN',
    value: true,
    status: '',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    type: 'NUMBER',
    value: true,
    status: 'success',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    type: 'SIMPLE_TEXT',
    value: true,
    status: 'warning',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    value: true,
    status: 'error',
    waiting: false,
    disabled: false
  }),
  mocks.documentBlock({
    value: true,
    status: '',
    waiting: true,
    disabled: false
  }),
  mocks.documentBlock({
    value: true,
    status: '',
    waiting: false,
    disabled: true
  })
]

const document = mocks.document({
  blocks
})

storiesOf('DocumentEditor', module)
  .add('empty', () => ({
    components: { TipeDocumentEditor },
    data() {
      return {
        styleObj: {
          height: '35rem',
          width: '35rem'
        },
        options: mocks.createManyMocks(mocks.blockOption, 3),
        blocks,
        document
      }
    },
    template: `
      <div :style="styleObj">
        <tipe-document-editor
          :document="document"
          :options="options"
        />
      </div>`
  }))
  .add('with blocks', () => ({
    components: { TipeDocumentEditor },
    data() {
      return {
        styleObj: {
          height: '35rem',
          width: '35rem'
        },
        options: mocks.createManyMocks(mocks.blockOption, 3),
        blocks,
        document
      }
    },
    template: `
      <div :style="styleObj">
        <tipe-document-editor
          :document="document"
          :options="options"
        />
      </div>`
  }))
