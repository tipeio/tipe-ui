<template>
  <tipe-file-icon-rectangle
    v-if="type == 'rectangle'"
    :file="file"
  />
  <tipe-file-icon-square
    v-else-if="type == 'square'"
    :file="file"
  />
</template>


<script>
import vueTypes from 'vue-types'
import TipeFileIconRectangle from './FileIconRectangle'
import TipeFileIconSquare from './FileIconSquare'

export default {
  name: 'FileIcon',
  components: {
    TipeFileIconRectangle,
    TipeFileIconSquare
  },
  props: {
    type: vueTypes.oneOf(['rectangle', 'square']).def('rectangle'),
    file: vueTypes.shape({
      type: vueTypes.string,
      label: vueTypes.string
    })
  }
}
</script>
