import { storiesOf } from '@storybook/vue'
import TipeDocumentBlockList from '@/components/DocumentEditor/DocumentBlockList'
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

storiesOf('DocumentEditor', module).add('status(undefined)', () => ({
  components: { TipeDocumentBlockList },
  data() {
    return {
      styleObj: {
        padding: '5rem 0',
        width: '35rem'
      },
      options: createManyMocks(blockOption, 3),
      blocks
    }
  },
  template: `
    <div :style="styleObj">
      <tipe-document-block-list :blocks="blocks" :options="options" />
    </div>`
}))
