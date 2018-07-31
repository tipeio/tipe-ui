<template>
  <tipe-file-icon-rectangle
    v-if="type == 'rectangle'"
    :file="file"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-square
    v-else-if="type == 'square'"
    :file="file"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-details
    v-else-if="type == 'details'"
    :file="file"
    @click="$emit('click', $event)"
  />
</template>


<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
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
    file: vueTypes.shape(interfaces.file)
  }
}
</script>
