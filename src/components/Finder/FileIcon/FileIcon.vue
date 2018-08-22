<template>
  <tipe-file-icon-rectangle
    v-if="type == 'rectangle'"
    :icon="file.icon"
    :label="file.label"
    :picker="picker"
    :selected="selected"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-square
    v-else-if="type == 'square'"
    :icon="file.icon"
    :label="file.label"
    :picker="picker"
    :selected="selected"
    @click="$emit('click', $event)"
  />
  <tipe-file-icon-details
    v-else-if="type == 'details'"
    :icon="file.icon"
    :label="file.label"
    :created-by="file.createdBy"
    :updated-at="file.updatedAt"
    :picker="picker"
    :selected="selected"
    @click="$emit('click', $event)"
  />
</template>


<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'
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
    file: vueTypes.shape(interfaces.file),
    picker: vueTypes.bool.def(false),
    selected: vueTypes.bool.def(false)
  }
}
</script>
