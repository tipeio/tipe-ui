import { storiesOf } from '@storybook/vue'

import TipeNumberInput from '@/components/NumberInput'

storiesOf('NumberInput', module)
  .add('size(small)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" size="small" />'
  }))
  .add('size(medium)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" size="medium" />'
  }))
  .add('size(large)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" size="large" />'
  }))
  .add('status(success)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" status="success" />'
  }))
  .add('status(warning)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" status="warning" />'
  }))
  .add('status(error)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" status="error" />'
  }))
  .add('waiting', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" waiting />'
  }))
  .add('disabled', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input :value="3" disabled />'
  }))
  .add('placeholder', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input placeholder="value" />'
  }))
  .add('max(10)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input placeholder="value" :max="10" />'
  }))
  .add('min(0)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input placeholder="value" :min="0" />'
  }))
  .add('step(0.0001)', () => ({
    components: { TipeNumberInput },
    template: '<tipe-number-input placeholder="value" :step="0.0001" />'
  }))
