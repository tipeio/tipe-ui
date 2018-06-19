import { storiesOf } from '@storybook/vue'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import documentBlockMock from '@/mocks/DocumentBlock'

storiesOf('DocumentBlock', module)
  .add('status(undefined)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: '',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(success)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: 'success',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(warning)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: 'warning',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('status(error)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: 'error',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('waiting', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: '',
          waiting: true,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
  .add('disabled', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        block: documentBlockMock({
          value: true,
          status: '',
          waiting: false,
          disabled: true,
          name: ''
        })
      }
    },
    template: '<tipe-document-block v-bind="block" />'
  }))
