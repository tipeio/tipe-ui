import { storiesOf } from '@storybook/vue'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import documentBlockMock from '@/mocks/DocumentBlock'

storiesOf('DocumentEditor', module)
  .add('status(undefined)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({ value: true, status: '' })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(success)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({ value: true, status: 'success' })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(warning)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({ value: true, status: 'warning' })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(error)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({ value: true, status: 'error' })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
