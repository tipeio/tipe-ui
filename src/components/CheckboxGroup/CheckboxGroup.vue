<template>
  <div 
    :data-tipe-ui="$options.name"
    :name="name"
    class="checkbox-group"
    @click="click" 
    @focus="focus" 
    @change="change" 
    @blur="blur"
  >
    <slot />
  </div>
</template>

<script>
import optionShape from '@/types/CheckboxGroup'

export default {
  name: 'TipeCheckboxGroup',
  props: optionShape,
  computed: {
    classObject: function() {
      const { status } = this
      return {
        success: status === 'success',
        error: status === 'error',
        warning: status === 'warning'
      }
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    focus(event) {
      this.$emit('focus', event)
    },
    blur(event) {
      this.$emit('blur', event)
    },
    change(event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style scoped lang="postcss">
.checkbox-group {
  display: flex;
  justify-content: space-evenly;
}
</style>
