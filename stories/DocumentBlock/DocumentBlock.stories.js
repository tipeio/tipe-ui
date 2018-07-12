import { storiesOf } from '@storybook/vue'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import { mocks } from '@tipe/tipe-test-utils'

storiesOf('DocumentBlock', module)
  .add('status(undefined)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: '',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
  .add('status(success)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: 'success',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
  .add('status(warning)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: 'warning',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
  .add('status(error)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: 'error',
          waiting: false,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
  .add('waiting', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: '',
          waiting: true,
          disabled: false
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
  .add('disabled', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 3),
        block: mocks.documentBlock({
          value: true,
          status: '',
          waiting: false,
          disabled: true,
          name: ''
        })
      }
    },
    template: '<tipe-document-block :block="block" :options="options" />'
  }))
