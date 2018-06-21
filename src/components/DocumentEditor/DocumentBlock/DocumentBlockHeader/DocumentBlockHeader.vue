<template>
  <div :data-tipe-ui="$options.name">
    <div class="top-row">
      <div class="label">
        {{ label }}
      </div>
      <div class="name">
        <tipe-document-block-name-input
          :value="name"
          :waiting="waiting"
          :disabled="disabled"
          @change="onChangeName"
        />
      </div>
    </div>
    <div class="bottom-row">
      <div class="description">
        <tipe-document-block-description-input
          :value="description"
          :waiting="waiting"
          :disabled="disabled"
          @change="onChangeName"
        />
      </div>
      <div class="apiId">
        <span class="apiId-label">API ID: </span>{{ apiId }}
      </div>
    </div>
  </div>
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlockNameInput from './DocumentBlockNameInput'
import TipeDocumentBlockDescriptionInput from './DocumentBlockDescriptionInput'

export default {
  name: 'TipeDocumentBlockHeader',
  components: {
    TipeDocumentBlockNameInput,
    TipeDocumentBlockDescriptionInput
  },
  props: documentBlockShape,
  methods: {
    onChangeName(event) {
      this.$emit('change', { name: event.target.value })
    },
    onChangeValue(event) {
      this.$emit('change', { value: event.target.value })
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlockHeader'] {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.bottom-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.label {
  padding-right: 0.75rem;
  box-sizing: border-box;
}

.description {
  flex: 1 1;
  box-sizing: border-box;
  padding-right: 0.75rem;
}

.apiId {
  grid-area: api-id;
  font-size: 0.8125rem;
  color: var(--midPurple);
}

.apiId-label {
  color: var(--gray);
}
</style>
