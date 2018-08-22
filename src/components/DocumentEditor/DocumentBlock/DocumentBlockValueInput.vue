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
import interfaces from '@/interfaces'
import { getBlockValueComponent } from '../helpers'
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
  props: interfaces.documentBlock,
  computed: {
    is() {
      return getBlockValueComponent(this.type)
    }
  },
  methods: {
    onChange(value) {
      this.$emit('change', {
        name: this.name,
        value
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlock'] {
  padding: 1.5rem 0 1rem 0;
}
</style>
