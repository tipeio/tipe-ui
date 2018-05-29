<template>
  <section :data-tipe-ui="$options.name">
    <header class="nav-container">
      <tipe-breadcrumbs :links="breadcrumbLinks" />
    </header>
    <div class="content-window">
      <div class="scrollable">
        <div class="browser">
          <section class="finder-container">
            <header class="finder-header">Folders</header>
            <tipe-finder
              :files="folders"
              layout="grid"
            />
          </section>
          <section class="finder-container">
            <header class="finder-header">Documents</header>
            <tipe-finder
              :files="documents"
              layout="grid"
            />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueTypes from 'vue-types'
import LinkShape from '@/types/Link'
import FileShape from '@/types/File'
import TipeFinder from '@/components/Finder'
import TipeBreadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'TipeContentBrowser',
  components: {
    TipeFinder,
    TipeBreadcrumbs
  },
  props: {
    breadcrumbLinks: vueTypes.arrayOf(vueTypes.shape(LinkShape)),
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape)),
    documents: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>


<style lang="postcss" scoped>
[data-tipe-ui='TipeContentBrowser'] {
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

.content-window {
  position: relative;
  overflow: hidden;
}

.scrollable {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-right: 17px;
}

.browser {
  display: flex;
  flex-direction: column;
  padding: 0 4.375rem;
}

.finder-container {
  padding-top: 3rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.finder-header {
  font-size: 1.3125rem;
  font-weight: 600;
  height: 3.5rem;
}
</style>
