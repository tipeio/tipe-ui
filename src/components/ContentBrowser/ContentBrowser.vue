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
            <tipe-finder />
          </section>
          <section class="finder-container">
            <header class="finder-header">Documents</header>
            <tipe-finder />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueTypes from 'vue-types'
import LinkShape from '@/types/Link'
import TipeFinder from '@/components/Finder'
import TipeBreadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'TipeContentBrowser',
  components: {
    TipeFinder,
    TipeBreadcrumbs
  },
  props: {
    breadcrumbLinks: vueTypes.arrayOf(LinkShape)
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
  background-color: var(--gray-lightest);
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
