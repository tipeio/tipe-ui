import { storiesOf } from '@storybook/vue'
import TipeDocumentEditor from '@/components/DocumentEditor'
import documentBlockMock from '@/mocks/DocumentBlock'
import blockOption from '@/mocks/BlockOption'
import createManyMocks from '@/mocks/createManyMocks'

const blocks = [
  documentBlockMock({
    value: true,
    status: '',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: 'success',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: 'warning',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: 'error',
    waiting: false,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: '',
    waiting: true,
    disabled: false
  }),
  documentBlockMock({
    value: true,
    status: '',
    waiting: false,
    disabled: true
  })
]

storiesOf('DocumentEditor', module)
  .add('empty', () => ({
    components: { TipeDocumentEditor },
    data() {
      return {
        styleObj: {
          height: '35rem',
          width: '35rem'
        },
        options: createManyMocks(blockOption, 3),
        blocks
      }
    },
    template: `
      <div :style="styleObj">
        <tipe-document-editor
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
        options: createManyMocks(blockOption, 3),
        blocks
      }
    },
    template: `
      <div :style="styleObj">
        <tipe-document-editor
          :blocks="blocks"
          :options="options"
        />
      </div>`
  }))
