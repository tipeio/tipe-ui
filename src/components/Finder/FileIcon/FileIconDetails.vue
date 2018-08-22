<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
    @mouseover="hovered = true"
    @mouseout="hovered = false"
    @click="$emit('click', $event)"
  >
    <button
      class="details-button"
      @click="$emit('click')"
    >
      <div class="details-layout">
        <div class="icon-container">
          <tipe-icon :icon="icon"/>
        </div>
        <div class="label">
          {{ label }}
        </div>
        <div class="created-by">
          Created by {{ author }}
        </div>
        <div class="dot">&#8226;</div>
        <div class="updated-at">
          Edited {{ updatedAt }}
        </div>
      </div>
    </button>
    <button
      v-if="hovered && !picker"
      class="trash"
      @click="$emit('delete')"
    >
      <tipe-icon icon="trash"/>
    </button>
    <button
      v-if="hovered && !picker"
      class="edit"
      @click="$emit('edit')"
    >
      <tipe-icon icon="edit"/>
    </button>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'
import interfaces from '@tipe/tipe-interfaces'

export default {
  name: 'TipeFileIconDetails',
  components: {
    TipeIcon
  },
  props: {
    picker: vueTypes.bool.def(false),
    selected: vueTypes.bool.def(false),
    ...interfaces.file
  },
  data() {
    return {
      hovered: false
    }
  },
  computed: {
    author() {
      return `${this.createdBy.firstName} ${this.createdBy.lastName}`
    },
    rootClassObject: props => ({
      selected: props.selected
    })
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeFileIconDetails'] {
  display: grid;
  grid-template-columns: 1fr 3rem 3rem;
  grid-template-rows: 4.8125rem;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid var(--gray-light);
}

[data-tipe-ui='TipeFileIconDetails']:first-child {
  border-top: 1px solid var(--gray-light);
}

[data-tipe-ui='TipeFileIconDetails']:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.01);
}

[data-tipe-ui='TipeFileIconDetails']:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

[data-tipe-ui='TipeFileIconDetails'].selected {
  background-color: rgba(0, 0, 0, 0.06);
}

.details-layout {
  display: grid;
  grid-template-areas: 'icon label label label' 'icon created-by dot updated-at';
  grid-template-columns: 3rem auto auto auto auto;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  justify-content: flex-start;
}

.icon-container {
  grid-area: icon;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  grid-area: label;
  grid-column: 1fr;
  display: grid;
  white-space: nowrap;
  font-size: 0.875rem;
  white-space: nowrap;
  letter-spacing: 0.008125rem;
  color: var(--text-gray);
  font-weight: 500;
  align-items: center;
  justify-content: flex-start;
}

.created-by {
  grid-area: created-by;
  grid-column: auto;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.75rem;
  white-space: nowrap;
  letter-spacing: 0.006875rem;
  color: var(--text-gray);
}

.updated-at {
  grid-area: updated-at;
  grid-column: 1fr;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.75rem;
  white-space: nowrap;
  letter-spacing: 0.006875rem;
  color: var(--text-gray);
}

.dot {
  grid-area: dot;
  color: var(--text-gray);
  font-size: 0.8rem;
  padding: 0 0.4rem;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
}
</style>
