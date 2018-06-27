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
import NavLinkShape from '@/types/NavLink'
import blockOptionShape from '@/types/BlockOption'
import documentShape from '@/types/Document'
import UserShape from '@/types/User'
import LinkShape from '@/types/Link'
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
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinkShape)),
    user: vueTypes.shape(UserShape),
    document: vueTypes.shape(documentShape),
    blockOptions: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(LinkShape))
  }
}
</script>
