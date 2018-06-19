<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click', label)"
  >
    <div class="layout">
      <div class="icon-container">
        <div class="icon-box">
          <tipe-icon
            :icon="icon"
            height="1.5rem"
            width="1.5rem"
          />
        </div>
      </div>
      <div class="label">{{ label }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </button>
</template>

<script>
import blockOptionShape from '@/types/BlockOption'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeSelectBlockOption',
  components: {
    TipeIcon
  },
  props: blockOptionShape
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeSelectBlockOption'] {
  display: flex;
  flex-direction: row;
  height: 3.375rem;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
}

.layout {
  display: grid;
  grid-template-areas:
    'icon label'
    'icon description';
  grid-template-row: 1fr 1fr;
  grid-auto-columns: 3.375rem 1fr;
  height: 3.375rem;
}

.icon-container {
  grid-area: icon;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box {
  height: 2.625rem;
  width: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 52, 108, 0.05);
  border-radius: 0.25rem;
}

.label {
  grid-area: label;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: var(--dark-purple);
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
}

.description {
  grid-area: description;
  font-size: 0.75rem;
  color: var(--midPurple);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
}
</style>
