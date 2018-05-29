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
import UserShape from '@/types/User'
import FileShape from '@/types/File'
import LinkShape from '@/types/Link'
import NavLinks from '@/types/NavLink'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeContentBrowser from '@/components/ContentBrowser'

export default {
  name: 'TipeFolderPage',
  components: {
    TipeDashboardLayout,
    TipeContentBrowser
  },
  props: {
    user: vueTypes.shape(UserShape),
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinks)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(LinkShape)),
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape)),
    documents: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>
