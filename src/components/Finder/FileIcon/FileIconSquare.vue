<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click', $event)"
  >
    <div class="layout">
      <div class="file">
        <div class="file-content">
          <div class="header">
            <div class="label">
              {{ file.label }}
            </div>
          </div>
          <div class="icon-container">
            <tipe-icon
              icon="plus"
              height="0.6875rem"
              width="0.6875rem"
            />
          </div>
        </div>
        <div class="cue-container">
          <tipe-cue />
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeIcon from '@/components/Icon'
import TipeCue from './CueIcon'

export default {
  name: 'TipeFileIconSquare',
  components: {
    TipeIcon,
    TipeCue
  },
  props: {
    file: vueTypes.shape(interfaces.file)
  },
  computed: {
    icon() {
      return {
        document: 'file',
        folder: 'folder'
      }[this.file.type]
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeFileIconSquare'] {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.layout {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file {
  position: relative;
  height: 9.625rem;
  width: 8.46875rem;
}

.file-content {
  height: 100%;
  width: calc(100% - 0.78125rem);
  display: grid;
  grid-template-rows: 2.1875rem 1fr;
  grid-auto-columns: 100%;
  overflow: hidden;
  border: 1px solid var(--gray-light);
  border-radius: 0.1875rem;
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.11);
}

.header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: var(--purple);
}

.label {
  white-space: nowrap;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  overflow: hidden;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cue-container {
  position: absolute;
  bottom: 1rem;
  right: -0;
}
</style>
