import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
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

const notes = `
#### :props
:document | interfaces.document |
`

storiesOf('DocumentEditor', module)
  .addDecorator(withKnobs)
  .add(
    'with blocks',
    withMarkdownNotes(notes)(() => ({
      components: { TipeDocumentEditor },
      data() {
        return {
          styleObj: {
            padding: '5rem',
            height: '35rem',
            width: '35rem'
          },
          options: mocks.createManyMocks(mocks.blockOption, 3),
          document: object('document', document)
        }
      },
      template: `
      <div :style="styleObj">
        <tipe-document-editor
          :document="document"
        />
      </div>`
    }))
  )
