<template>
  <tipe-dashboard-layout
    :user="user"
    :nav-links="navLinks"
  >
    <tipe-content-browser
      :breadcrumb-links="breadcrumbLinks"
      :folders="folders"
      :documents="documents"
    />
  </tipe-dashboard-layout>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeContentBrowser from '@/components/ContentBrowser'

export default {
  name: 'TipeFolderPage',
  components: {
    TipeDashboardLayout,
    TipeContentBrowser
  },
  props: {
    user: vueTypes.shape(interfaces.user),
    navLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.navLink)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.link)),
    folders: vueTypes.arrayOf(vueTypes.shape(interfaces.file)),
    documents: vueTypes.arrayOf(vueTypes.shape(interfaces.file))
  }
}
</script>
