import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'
import TipeSelectBlock from '../../src/components/DocumentEditor/DocumentBlock/SelectBlock'

storiesOf('SelectBlock', module)
  .add('default', () => ({
    components: { TipeSelectBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 6)
      }
    },
    template: '<tipe-select-block :options="options" />'
  }))
  .add('disabled', () => ({
    components: { TipeSelectBlock },
    data() {
      return {
        options: mocks.createManyMocks(mocks.blockOption, 6)
      }
    },
    template: '<tipe-select-block :options="options" disabled />'
  }))
