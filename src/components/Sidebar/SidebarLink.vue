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
    url: vueTypes.string.def('#'),
    icon: vueTypes.string,
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

<style lang="postcss" scoped>
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

.indicator {
  flex: 0 0 0.3125rem;
  height: 100%;
}

.indicator.active {
  background-color: #1be5b2;
}
</style>
