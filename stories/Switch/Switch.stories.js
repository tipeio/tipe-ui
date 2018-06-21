import { storiesOf } from '@storybook/vue'

import TipeSwitch from '../../src/components/Switch'

const style = () => ({
  width: '250px'
})
storiesOf('Switch', module)
  .add('default', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing"/></div>'
  }))
  .add('disabled', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :disabled="true"/></div>'
  }))
  .add('waiting', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :waiting="true"/></div>'
  }))
  .add('checked', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true"/></div>'
  }))
  .add('not tabable', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" :tabindex="-1"/></div>'
  }))
  .add('error', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" status="error"/></div>'
  }))

  .add('warning', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" status="warning"/></div>'
  }))
  .add('success', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" status="success"/></div>'
  }))
  .add('small', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" size="small" /></div>'
  }))
  .add('large', () => ({
    components: { TipeSwitch },
    computed: { style },
    template:
      '<div :style="style"><tipe-switch label="File Sharing" name="sharing" :value="true" size="large"/></div>'
  }))
