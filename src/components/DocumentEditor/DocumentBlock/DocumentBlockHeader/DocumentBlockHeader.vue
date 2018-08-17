<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
  >
    <div class="top-row">
      <div class="label">
        {{ label }}
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
    <div class="bottom-row">
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import interfaces from '@tipe/tipe-interfaces'
import TipeDocumentBlockNameInput from './DocumentBlockNameInput'
import TipeDocumentBlockDescriptionInput from './DocumentBlockDescriptionInput'

export default {
  name: 'TipeDocumentBlockHeader',
  components: {
    TipeDocumentBlockNameInput,
    TipeDocumentBlockDescriptionInput
  },
  props: interfaces.documentBlock,
  computed: {
    rootClassObject: props => ({
      disabled: props.disabled
    })
  },
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
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}

[data-tipe-ui='TipeDocumentBlockHeader'].disabled {
  opacity: 0.6;
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
  color: var(--text-gray);
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.009375rem;
}

.name {
  color: var(--text-gray);
  font-size: 1rem;
  letter-spacing: 0.009375rem;
}

.description {
  flex: 1 1;
  box-sizing: border-box;
  padding-right: 0.75rem;
  text-align: left;
  color: var(--text-gray-light);
  font-size: 0.875rem;
  letter-spacing: 0.009375rem;
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
