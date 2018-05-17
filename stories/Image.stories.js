import { storiesOf } from '@storybook/vue'

import TipeImage from '@/components/image/image.vue'

const style = {
  height: '100px',
  width: '100px'
}

storiesOf('Image', module)
  .add('ok', () => ({
    components: { TipeImage },
    computed: {
      style: () => style
    },
    template:
      '<tipe-image url="http://placekitten.com/200/200" :style="style" />'
  }))
  .add('error', () => ({
    components: { TipeImage },
    computed: {
      style: () => style
    },
    template: '<tipe-image :style="style" />'
  }))
