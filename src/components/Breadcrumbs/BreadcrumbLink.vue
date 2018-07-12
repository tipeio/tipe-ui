<template>
  <a
    :data-tipe-ui="$options.name"
    :href="url"
  >
    <div class="icon-container">
      <tipe-icon icon="folder-filled"/>
    </div>
    {{ label }}
  </a>
</template>

<script>
import interfaces from '@tipe/tipe-interfaces'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeBreadcrumbLink',
  components: {
    TipeIcon
  },
  props: { ...interfaces.link }
}
</script>

<style lang="postcss" scoped>
a {
  display: grid;
  grid-template-columns: 2.5rem auto;
  height: 2.125rem;
  padding-right: 0.625rem;
  align-items: center;
  border: 1px solid var(--gray-blue-light);
  border-radius: 0.1875rem;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 0.8125rem;
  background-color: #fff;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
