<template>
  <button :data-tipe-ui="$options.name">
    <tipe-icon
      icon="options-horizontal"
      height="0.6875rem"
      width="0.6875rem"
    />
  </button>
</template>

<script>
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeCueIcon',
  components: {
    TipeIcon
  }
}
</script>


<style lang="postcss" scoped>
[data-tipe-ui='TipeCueIcon'] {
  height: 1.5625rem;
  width: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray);
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.875rem 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  overflow: visible;
}
</style>
