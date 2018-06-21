<template>
  <div
    :data-tipe-ui="$options.name"
    :tabindex="tabindex"
    @keyup.enter="toggle"
  >
    <div
      class="control-container"
      @click="toggle"
    >
      <slot
        v-bind="$props"
        name="control"
      />
    </div>
    <div
      v-if="open"
      class="panel-background"
      @click="toggle"
    />
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
import vueTypes from 'vue-types'

export default {
  name: 'TipeDropDown',
  props: {
    tabIndex: vueTypes.number.def(0),
    disabled: vueTypes.bool.def(false),
    waiting: vueTypes.bool.def(false)
  },
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
  z-index: 1;
}

.panel-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 0;
}
</style>
