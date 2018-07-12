<template>
  <tipe-dashboard-layout
    :user="user"
    :nav-links="navLinks"
  >
    <div class="container">
      <div class="layout">
        <header class="template-header">Templates</header>
        <tipe-template-browser :templates="templates"/>
      </div>
    </div>
  </tipe-dashboard-layout>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeTemplateBrowser from '@/components/TemplateBrowser'

export default {
  name: 'TipeFolderPage',
  components: {
    TipeDashboardLayout,
    TipeTemplateBrowser
  },
  props: {
    user: vueTypes.shape(interfaces.user),
    navLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.navLink)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.link)),
    templates: vueTypes.arrayOf(vueTypes.shape(interfaces.file))
  }
}
</script>

<style lang="postcss" scoped>
.container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 3.375rem;
}

.layout {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 2.5rem 1fr;
  grid-auto-columns: 1fr;
  grid-row-gap: 1rem;
}

.template-header {
  font-size: 2.375rem;
  font-weight: 600;
  height: 3.5rem;
  color: var(--purple-dark);
}
</style>
