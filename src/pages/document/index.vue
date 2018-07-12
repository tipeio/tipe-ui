<template>
  <tipe-dashboard-layout
    :user="user"
    :nav-links="navLinks"
  >
    <tipe-content-layout :breadcrumb-links="breadcrumbLinks">
      <tipe-document-editor
        :document="document"
        :options="blockOptions"
      />
    </tipe-content-layout>
  </tipe-dashboard-layout>
</template>


<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeContentLayout from '@/layouts/Content'
import TipeDocumentEditor from '@/components/DocumentEditor/DocumentEditor'

export default {
  name: 'ContentPage',
  components: {
    TipeDashboardLayout,
    TipeContentLayout,
    TipeDocumentEditor
  },
  props: {
    navLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.navLink)),
    user: vueTypes.shape(interfaces.user),
    document: vueTypes.shape(interfaces.document),
    blockOptions: vueTypes.arrayOf(vueTypes.shape(interfaces.blockOption)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.link))
  }
}
</script>
