import { storiesOf } from '@storybook/vue'
import blockOptionMock from '@/mocks/BlockOption'
import createManyMocks from '@/mocks/createManyMocks'
import TipeSelectBlock from '../../src/components/DocumentEditor/DocumentBlock/SelectBlock'

storiesOf('SelectBlock', module)
  .add('default', () => ({
    components: { TipeSelectBlock },
    data() {
      return {
        options: createManyMocks(blockOptionMock, 6)
      }
    },
    template: '<tipe-select-block :options="options" />'
  }))
  .add('disabled', () => ({
    components: { TipeSelectBlock },
    data() {
      return {
        options: createManyMocks(blockOptionMock, 6)
      }
    },
    template: '<tipe-select-block :options="options" disabled />'
  }))
