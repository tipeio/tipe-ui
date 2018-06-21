<template>
  <div :data-tipe-ui="$options.name">
    <component
      :status="status"
      :value="value"
      :waiting="waiting"
      :disabled="disabled"
      :is="is"
      size="medium"
      @change="onChange"
    />
  </div>
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
  },
  methods: {
    onChange(event) {
      this.$emit('change', { value: event.target.value })
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlock'] {
  padding: 1.5rem 0 1rem 0;
}
</style>
