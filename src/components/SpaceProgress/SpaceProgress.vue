<template>
  <div class="column">
    <p class="title">Space</p>
    <div class="progress">
      <div class="outter-bar"/>
      <div class="inner-bar"/>
    </div>
    <p class="subtitle">{{ usedSpace }} / {{ totalSpace }}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'SpaceProgress',
  props: {
    percent: vueTypes.string,
    totalSpace: vueTypes.string,
    usedSpace: vueTypes.string
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
  width: 34px;
  height: 3px;
  border-radius: 6px;
  background-color: var(--purple);
  z-index: 1;
  grid-row-start: 1;
  grid-column-start: 1;
}
</style>
