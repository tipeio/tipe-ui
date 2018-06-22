import { storiesOf } from '@storybook/vue'

import TipeRadio from '../../src/components/Radio'

const style = () => ({
  width: '200px'
})

storiesOf('Radio', module)
  .add('default radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" name="language" />'
  }))
  .add('small radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" size="small" />'
  }))
  .add('large radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" size="large"/>'
  }))
  .add('success radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" status="success"/>'
  }))
  .add('warning radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" status="warning"/>'
  }))
  .add('error radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" status="error"/>'
  }))
  .add('waiting radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" :waiting="true"/>'
  }))
  .add('disabled radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" :disabled="true"/>'
  }))
  .add('checked radio', () => ({
    components: { TipeRadio },
    computed: { style },
    template: '<tipe-radio label="JavaScript" :checked="true"/>'
  }))
