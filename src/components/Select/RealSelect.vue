<template functional>
  <select
    :disabled="waiting || disabled"
  >
    <option
      v-if="props.placeholder"
      :selected="true"
      disabled
    >
      {{ placeholder }}
    </option>
    <option
      v-for="option in props.options"
      :value="option.value"
      :selected="props.selectedValue.value === option.value"
      :key="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
