<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click', $event)"
  >
    <div 
      v-if="icon" 
      class="icon-container">
      <tipe-icon :icon="icon"/>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeBreadcrumbLink',
  components: {
    TipeIcon
  },
  props: {
    icon: vueTypes.string.def(''),
    label: vueTypes.string.def(''),
    name: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
button {
  display: flex;
  flex-direction: row;
  height: 2.125rem;
  width: auto;
  padding-right: 0.625rem;
  border: 1px solid var(--gray-blue-light);
  border-radius: 0.1875rem;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 0.8125rem;
  background-color: #fff;
}

.icon-container {
  height: 100%;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  padding-left: 0.5rem;
}
</style>
