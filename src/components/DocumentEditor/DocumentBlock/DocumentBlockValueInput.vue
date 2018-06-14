<template>
  <component
    :status="status"
    :value="value"
    :waiting="waiting"
    :disabled="disabled"
    :is="is"
    size="large"
    @change="$emit('change', $event)"
  />
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'
import TipeSwitch from '@/components/Switch'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeSwitch
  },
  props: documentBlockShape,
  computed: {
    is() {
      return 'tipe-switch'
    }
  }
}
</script>
