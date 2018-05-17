import { storiesOf } from '@storybook/vue'

import TipeIcon from '../../src/components/Icon.vue'

const style = () => ({
  height: '1rem',
  width: '1rem'
})

storiesOf('Icon', module)
  .add('file', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="file" />'
  }))
  .add('files', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="files" />'
  }))
  .add('folder', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="folder" />'
  }))
  .add('image', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="image" />'
  }))
  .add('layout', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="layout" />'
  }))
  .add('plus', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="plus" />'
  }))
  .add('settings', () => ({
    components: { TipeIcon },
    computed: { style },
    template: '<tipe-icon :style="style" icon="settings" />'
  }))
