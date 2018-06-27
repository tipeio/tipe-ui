<template>
  <select 
    :disabled="disabled" 
    :data-tipe-ui="$options.name" >
    <option 
      v-if="placeholder"
      :selected="true"
      disabled>{{ placeholder }}</option>
    <option 
      v-for="option in options"
      :value="option.value" 
      :selected="selectedValue.value === option.value"
      :key="option.value"
    >{{ option.label }}</option>
  </select>
</template>


<script>
import vueTypes from 'vue-types'
import SelectOptionShape from '@/types/SelectOptionShape'

export default {
  name: 'TipeNativeSelect',
  props: {
    disabled: vueTypes.bool,
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
    placeholder: vueTypes.string,
    selectedValue: vueTypes.object
  }
}
</script>

<style lang="postcss">
select {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
