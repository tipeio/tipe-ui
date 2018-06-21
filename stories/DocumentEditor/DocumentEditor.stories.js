import { storiesOf } from '@storybook/vue'
import TipeDocumentBlockList from '@/components/DocumentEditor/DocumentBlockList'
import documentBlockMock from '@/mocks/DocumentBlock'
import createManyMocks from '@/mocks/createManyMocks'

storiesOf('DocumentEditor', module).add('status(undefined)', () => ({
  components: { TipeDocumentBlockList },
  data() {
    return {
      blocks: createManyMocks(
        () =>
          documentBlockMock({
            value: true,
            status: '',
            waiting: false,
            disabled: false
          }),
        3
      )
    }
  },
  template: '<tipe-document-block-list :blocks="blocks" />'
}))
