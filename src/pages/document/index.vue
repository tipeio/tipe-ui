<template>
  <tipe-dashboard-layout
    :user="user"
    :nav-links="navLinks"
  >
    <tipe-tabs>
      <tipe-tabs-panel label="Page Content">
        <tipe-document-block-list
          :blocks="blocks"
          :options="blockOptions"
        />
      </tipe-tabs-panel>
      <tipe-tabs-panel label="API">
        <div>API</div>
      </tipe-tabs-panel>
    </tipe-tabs>
  </tipe-dashboard-layout>
</template>


<script>
import vueTypes from 'vue-types'
import NavLinkShape from '@/types/NavLink'
import blockOptionShape from '@/types/BlockOption'
import documentBlockShape from '@/types/DocumentBlock'
import UserShape from '@/types/User'
import TipeDashboardLayout from '@/layouts/Dashboard'
import TipeDocumentBlockList from '@/components/DocumentEditor/DocumentBlockList'
import TipeTabs from '@/components/Tabs'
import TipeTabsPanel from '@/components/TabsPanel'

export default {
  name: 'ContentPage',
  components: {
    TipeDashboardLayout,
    TipeDocumentBlockList,
    TipeTabs,
    TipeTabsPanel
  },
  props: {
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinkShape)),
    user: vueTypes.shape(UserShape),
    blocks: vueTypes.arrayOf(vueTypes.shape(documentBlockShape)),
    blockOptions: vueTypes.arrayOf(vueTypes.shape(blockOptionShape))
  }
}
</script>
