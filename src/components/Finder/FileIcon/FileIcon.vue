<template>
  <tipe-file-icon-rectangle
    v-if="type == 'rectangle'"
    :file="file"
  />
  <tipe-file-icon-square
    v-else-if="type == 'square'"
    :file="file"
  />
  <tipe-file-icon-details
    v-else-if="type == 'details'"
    :file="file"
  />
</template>


<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TipeFileIconRectangle from './FileIconRectangle'
import TipeFileIconSquare from './FileIconSquare'
import TipeFileIconDetails from './FileIconDetails'

export default {
  name: 'FileIcon',
  components: {
    TipeFileIconRectangle,
    TipeFileIconSquare,
    TipeFileIconDetails
  },
  props: {
    type: vueTypes.oneOf(['rectangle', 'square', 'details']).def('rectangle'),
    file: vueTypes.shape(FileShape)
  }
}
</script>
