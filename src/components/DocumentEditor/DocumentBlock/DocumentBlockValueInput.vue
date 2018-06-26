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
import { getBlockValueComponent } from '@/libs/blocks'
import TipeSwitch from '@/components/Switch'
import TipeNumberInput from '@/components/NumberInput'
import TipeTextInput from '@/components/TextInput'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeSwitch: TipeSwitch,
    TipeNumberInput: TipeNumberInput,
    TipeTextInput: TipeTextInput
  },
  props: documentBlockShape,
  computed: {
    is() {
      return getBlockValueComponent(this.type)
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
