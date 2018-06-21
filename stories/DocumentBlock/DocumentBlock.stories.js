import { storiesOf } from '@storybook/vue'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import blockOption from '@/mocks/BlockOption'
import documentBlockMock from '@/mocks/DocumentBlock'
import createManyMocks from '@/mocks/createManyMocks'

storiesOf('DocumentBlock', module)
  .add('status(undefined)', () => ({
    components: { TipeDocumentBlock },
    data() {
      return {
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
        options: createManyMocks(blockOption, 3),
        block: documentBlockMock({
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
