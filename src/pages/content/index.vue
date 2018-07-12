<template>
  <main :class="$style.main">
    <div :class="$style.layout">
      <nav :class="$style.nav">
        <tipe-sidebar
          :compressed="true"
          :links="navLinks"
        />
      </nav>
      <header :class="$style.header">
        <tipe-topbar
          :profile-image-url="user.profileImageUrl"
        />
      </header>
      <section :class="$style.stage">
        <header :class="$style.stage_header">Content</header>
        <section :class="$style.stage_section">
          <tipe-folder-card :files="folders" />
        </section>
        <section :class="$style.stage_section">
          <tipe-document-card :files="documents" />
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeSidebar from '@/components/Sidebar'
import TipeTopbar from '@/components/Topbar'
import TipeDocumentCard from '@/components/DocumentCard'
import TipeFolderCard from '@/components/FolderCard'

export default {
  name: 'ContentPage',
  components: {
    TipeSidebar,
    TipeTopbar,
    TipeDocumentCard,
    TipeFolderCard
  },
  props: {
    navLinks: vueTypes.arrayOf(vueTypes.shape(interfaces.navLink)),
    documents: vueTypes.arrayOf(vueTypes.shape(interfaces.file)),
    folders: vueTypes.arrayOf(vueTypes.shape(interfaces.file)),
    user: vueTypes.shape(interfaces.user)
  }
}
</script>


<style lang="postcss" module>
.main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.layout {
  display: grid;
  grid-template-areas:
    'nav header header'
    'nav section aside';
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 5rem 1fr auto;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.nav {
  grid-area: nav;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  grid-area: header;
  padding: 0.4rem 1.4rem 0 1.4rem;
  border-bottom: 1px solid var(--gray-light);
  box-sizing: border-box;
  background-color: var(--gray-lightest);
}

.stage {
  grid-area: section;
  display: grid;
  grid-template-areas:
    'header header'
    'finder finder';
  grid-template-rows: 4.875rem 1fr;
  grid-auto-columns: 18.75rem minmax(18rem, 1fr);
  grid-column-gap: 1.25rem;
  background-color: var(--gray-lightest);
  padding: 5rem 5.625rem 5rem 5.625rem;
  box-sizing: border-box;
}

.stage_header {
  grid-area: header;
  font-size: 2.375rem;
  font-weight: 400;
  letter-spacing: -1.1px;
}

.stage_finder {
  grid-area: finder;
}
</style>
