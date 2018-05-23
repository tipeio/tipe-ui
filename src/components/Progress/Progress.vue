<template>
  <div class="column">
    <p class="title">{{ title }}</p>
    <div class="progress">
      <div class="outter-bar"/>
      <div 
        :class="percent" 
        class="inner-bar"/>
    </div>
    <p class="subtitle">{{ used }}{{ unit }} / {{ total }}{{ unit }}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeProgress',
  props: {
    total: vueTypes.number,
    used: vueTypes.number,
    unit: vueTypes.string.def(''),
    title: vueTypes.string
  },
  computed: {
    percent: function() {
      const { used, total } = this
      return {
        ['column-end-' + Math.trunc(used / total * 100)]: true
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.column {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.1875rem;
  font-weight: bold;
  color: var(--text-gray);
  margin: 0.5rem 0;
}

.subtitle {
  font-size: 0.625rem;
  color: var(--text-gray-light);
  font-weight: bold;
  margin: 0.5rem 0;
}

.progress {
  display: grid;
  grid-template-columns: repeat(100, 1.1px);
}

.outter-bar {
  width: 110px;
  height: 3px;
  border-radius: 6px;
  background-color: var(--purple-transparent-light);
  z-index: -1;
  grid-row-start: 1;
  grid-column-start: 1;
}

.inner-bar {
  height: 3px;
  border-radius: 6px;
  background-color: var(--purple);
  z-index: 1;
  grid-row-start: 1;
  grid-column-start: 1;
}

@for $i from 0 to 100 {
  .column-end-$i {
    grid-column-end: $i;
  }
}
</style>
