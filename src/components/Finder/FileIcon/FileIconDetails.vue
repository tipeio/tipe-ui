<template>
  <div
    :data-tipe-ui="$options.name"
    @mouseover="hovered = true"
    @mouseout="hovered = false"
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
          {{ file.label }}
        </div>
        <div class="created-by">
          Created by {{ createdBy }}
        </div>
        <div class="dot">
          <tipe-icon
            icon="dot"
            height="0.8rem"
            width="0.8rem"
          />
        </div>
        <div class="updated-at">
          Edited {{ updatedAt }}
        </div>
      </div>
    </button>
    <button
      v-if="hovered"
      class="trash"
      @click="$emit('delete')"
    >
      <tipe-icon icon="trash"/>
    </button>
    <button
      v-if="hovered"
      class="edit"
      @click="$emit('edit')"
    >
      <tipe-icon icon="rocket"/>
    </button>
  </div>
</template>

<script>
import moment from 'moment'
import TipeIcon from '@/components/Icon'
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import { getFileIcon } from './utils'

export default {
  name: 'TipeFileIconDetails',
  components: {
    TipeIcon
  },
  props: {
    file: vueTypes.shape(FileShape)
  },
  data() {
    return {
      hovered: false
    }
  },
  computed: {
    icon() {
      return getFileIcon(this.file)
    },
    updatedAt() {
      return moment(this.file.updatedAt).fromNow()
    },
    createdBy() {
      return `${this.file.createdBy.firstName} ${this.file.createdBy.lastName}`
    }
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
  border-top: 1px solid var(--gray-light);
}

[data-tipe-ui='TipeFileIconDetails']:last-child {
  border-bottom: 1px solid var(--gray-darker);
}

[data-tipe-ui='TipeFileIconDetails']:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.01);
}

[data-tipe-ui='TipeFileIconDetails']:hover {
  background-color: rgba(255, 255, 255, 0.9);
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
  grid-column: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  fill: var(--text-gray);
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
