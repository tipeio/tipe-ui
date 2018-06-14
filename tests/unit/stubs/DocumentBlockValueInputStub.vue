<template>
  <input
    :value="value"
    type="text"
    @change="$emit('change', $event)"
  >
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'

export default {
  name: 'TipeDocumentBlockValueInputStub',
  props: documentBlockShape
}
</script>
