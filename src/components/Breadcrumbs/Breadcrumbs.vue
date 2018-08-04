<template>
  <nav :data-tipe-ui="$options.name">
    <tipe-breadcrumb-link
      v-for="(link, i) in links"
      :key="i"
      v-bind="link"
      @click="$emit('click', link.name)"
    />
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import TipeBreadcrumbLink from './BreadcrumbLink'

export default {
  name: 'TipeBreadcrumbs',
  components: {
    TipeBreadcrumbLink
  },
  props: {
    links: vueTypes.arrayOf(
      vueTypes.shape({
        icon: vueTypes.string.def(''),
        label: vueTypes.string.def(''),
        name: vueTypes.string.def('')
      })
    )
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

button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}

button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
