<template>
  <div
    :data-tipe-ui="$options.name"
    :tabindex="tabindex"
  >
    <div @click="toggle">
      <slot
        v-bind="$props"
        name="control"
      />
    </div>
    <div
      v-if="open"
      class="panel-container"
    >
      <slot
        v-bind="$props"
        name="panel"
      />
    </div>
  </div>
</template>

<script>
import inputProps from '@/types/InputProps'

export default {
  name: 'TipeDropDown',
  props: inputProps,
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      if (this.disabled || this.waiting) return
      this.open = !this.open
    }
  }
}
</script>

<style>
[data-tipe-ui='TipeDropDown'] {
  position: relative;
}

.panel-container {
  position: absolute;
  top: 100%;
  left: 0;
  background: transparent;
}
</style>
