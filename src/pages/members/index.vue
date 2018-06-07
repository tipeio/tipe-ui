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
        <section :class="$style.stage_section">
          <settings-menu />
        </section>
        <section :class="$style.stage_section">
          <tipe-members-panel 
            :members="members" 
            @toggle="modalToggle" />
        </section>
      </section>
    </div>
    <div 
      v-if="modalOpen" 
      :class="$style.modal" >
      <add-member 
     
        @close="modalToggle" />
    </div>
  </main>
</template>

<script>
import vueTypes from 'vue-types'
import NavLinkShape from '@/types/NavLink'
import FileShape from '@/types/File'
import TipeSidebar from '@/components/Sidebar'
import TipeTopbar from '@/components/Topbar'
import SettingsMenu from '@/components/SettingsMenu'
import TipeMembersPanel, { AddMember } from '@/components/MembersPanel'

export default {
  name: 'MembersPage',
  components: {
    TipeSidebar,
    TipeTopbar,
    TipeMembersPanel,
    AddMember,
    SettingsMenu
  },
  props: {
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinkShape)),
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape)),
    user: vueTypes.object,
    members: vueTypes.array
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    modalToggle() {
      this.modalOpen = !this.modalOpen
    }
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

.modal {
  z-index: 5;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
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
  grid-template-areas: 'finder finder';
  grid-template-rows: 1fr;
  grid-auto-columns: 12.75rem minmax(18rem, 1fr);
  grid-column-gap: 1.25rem;
  background-color: var(--gray-lightest);
  padding: 5rem 5.625rem 5rem 0;
  box-sizing: border-box;
}

.stage_finder {
  grid-area: finder;
}
</style>
