<template>
  <tipe-dashboard-layout
    :nav-links="navLinks"
    :user="user"
  >
    <section class="stage">
      <header class="stage__header">
        <tipe-breadcrumbs :links="breadcrumbLinks"/>
        <tipe-button size="small">Cancel</tipe-button>
      </header>
      <section class="new-file-container">
        <tipe-new-file
          :templates="templates"
          :folders="folders"
        />
      </section>
    </section>
  </tipe-dashboard-layout>
</template>

<script>
import vueTypes from 'vue-types'
import UserShape from '@/types/User'
import FileShape from '@/types/File'
import NavLinkShape from '@/types/NavLink'
import Link from '@/types/Link'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeBreadcrumbs from '@/components/Breadcrumbs'
import TipeNewFile from '@/components/NewFile'
import TipeButton from '@/components/Button'

export default {
  name: 'TipeNewFilePage',
  components: {
    TipeDashboardLayout,
    TipeBreadcrumbs,
    TipeNewFile,
    TipeButton
  },
  props: {
    user: vueTypes.shape(UserShape),
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinkShape)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(Link)),
    templates: vueTypes.arrayOf(vueTypes.shape(FileShape)),
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>

<style lang="postcss" scoped>
.stage {
  display: grid;
  grid-template-rows: 3.25rem 1fr;
  height: 100%;
  width: 100%;
}

.stage__header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: center;
  justify-items: flex-start;
  background-color: #f7f8fb;
  height: 3.25rem;
  padding: 0 4.375rem;
  box-sizing: border-box;
}

.new-file-container {
  padding: 1.875rem 20%;
  box-sizing: border-box;
}

@media (max-width: 60em) {
  .new-file-container {
    padding: 1.875rem 4.375rem;
    box-sizing: border-box;
  }
}
</style>
