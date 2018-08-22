<template>
  <div :data-tipe-ui="$options.name">
    <div class="nav-container">
      <tipe-breadcrumbs :links="breadcrumbLinks"/>
    </div>
    <div class="stage">
      <slot />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeBreadcrumbs from '@/components/Breadcrumbs'
import interfaces from '@/interfaces'

export default {
  name: 'TipeContentLayout',
  components: {
    TipeBreadcrumbs
  },
  props: {
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.link))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeContentLayout'] {
  display: grid;
  grid-template-rows: 3.3125rem 1fr;
  height: 100%;
  width: 100%;
}

.nav-container {
  display: flex;
  align-content: center;
  justify-items: flex-start;
  background-color: #f7f8fb;
  padding: 0 4.375rem;
}

.stage {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 3.75rem 0 3.75rem;
}
</style>
