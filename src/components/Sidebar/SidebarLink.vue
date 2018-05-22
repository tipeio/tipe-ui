<template>
  <a
    :class="rootClass"
    :data-tipe-ui="$options.name"
    :href="url"
    @mouseover="hovered = true"
    @mouseout="hovered = false"
  >
    <div class="icon-container">
      <tipe-icon
        :icon="icon"
        class="icon"
      />
    </div>
    <div
      v-if="!compressed"
      class="label">{{ label }}
    </div>
    <div
      :class="indicatorClass"
    />
  </a>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'TipeSidebarLink',
  components: {
    TipeIcon
  },
  props: {
    label: vueTypes.string,
    url: vueTypes.string.def('#'),
    icon: vueTypes.string,
    compressed: vueTypes.bool.def(false),
    active: vueTypes.bool.def(false)
  },
  data() {
    return {
      hovered: false
    }
  },
  computed: {
    isActive() {
      return this.active || this.hovered
    },
    rootClass() {
      return {
        compressed: this.compressed,
        active: this.isActive
      }
    },
    indicatorClass() {
      return {
        indicator: true,
        active: this.isActive
      }
    }
  }
}
</script>

<style lang="postcss">
[data-tipe-ui='TipeSidebarLink'] {
  display: flex;
  flex-direction: row;
  height: 5rem;
  background-color: var(--purple);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
}

[data-tipe-ui='TipeSidebarLink'].active {
  background-color: rgb(110, 92, 245);
}

.icon-container {
  flex: 0 0 4.6875rem;
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}

.label {
  flex: 1 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
}

.indicator {
  flex: 0 0 0.3125rem;
  height: 100%;
}

.indicator.active {
  background-color: #1be5b2;
}
</style>
