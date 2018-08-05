<template>
  <tipe-file-icon-rectangle
    v-if="type == 'rectangle'"
    :icon="icon"
    :label="label"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-square
    v-else-if="type == 'square'"
    :icon="icon"
    :label="label"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-details
    v-else-if="type == 'details'"
    :icon="icon"
    :label="label"
    :created-by="createdBy"
    :updated-at="updatedAt"
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
    ...interfaces.file
  }
}
</script>
