import { storiesOf } from '@storybook/vue'

import TipeImage from '../src/components/Image'

const style = {
  height: '100px',
  width: '100px'
}

const imageLoader = () => new Promise(() => {})

storiesOf('Image', module)
  .add('ok', () => ({
    components: { TipeImage },
    computed: {
      style: () => style
    },
    template:
      '<tipe-image url="http://placekitten.com/200/200" :style="style"/>'
  }))
  .add('error', () => ({
    components: { TipeImage },
    computed: {
      style: () => style
    },
    template: '<tipe-image :style="style" />'
  }))
  .add('waiting', () => ({
    components: { TipeImage },
    data() {
      return {
        imageLoader
      }
    },
    computed: {
      style: () => style
    },
    template: '<tipe-image :imageLoader="imageLoader" :style="style"/>'
  }))
