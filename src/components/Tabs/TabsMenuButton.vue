<template>
  <button
    :class="rootClassObject"
    :data-tipe-ui="$options.name"
    @click="$emit('click')"
  >
    <div :class="layoutClassObject">
      <div
        v-if="icon"
        class="icon-container"
      >
        <tipe-icon :icon="icon"/>
      </div>
      <div class="label">
        {{ label }}
      </div>
    </div>
  </button>
</template>

<script>
import TabsMenuButtonShape from '@/types/TabsMenuButton'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeTabsMenuButton',
  components: {
    TipeIcon
  },
  props: TabsMenuButtonShape,
  computed: {
    rootClassObject() {
      return {
        active: this.active
      }
    },
    layoutClassObject() {
      return {
        'icon-layout': this.icon,
        'label-layout': !this.icon
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTabsMenuButton'] {
  height: 2.6875rem;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 0.1875rem solid transparent;
}

.label-layout {
  display: flex;
  align-items: center;
  padding-left: 0.8125rem;
  box-sizing: border-box;
}

.icon-layout {
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: center;
}

.icon-container {
  display: flex;
  justify-content: center;
}

.label {
  display: flex;
  justify-content: flex-start;
  font-size: 0.8125rem;
  letter-spacing: 0.02rem;
  color: var(--text-gray);
  box-sizing: border-box;
  padding-right: 2.5rem;
}

.active {
  border-bottom: 0.1875rem solid var(--purple);
}
</style>
