<template>
  <nav :data-tipe-ui="$options.name">
    <tipe-breadcrumb-link
      v-for="(link, i) in links"
      :key="i"
      v-bind="link"
    />
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import TipeBreadcrumbLink from './BreadcrumbLink.vue'
import LinkShape from '@tipe/tipe-interfaces'

export default {
  name: 'TipeBreadcrumbs',
  components: {
    TipeBreadcrumbLink
  },
  props: {
    links: vueTypes.arrayOf(LinkShape)
  }
}
</script>

<style lang="postcss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

a:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}

a:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
