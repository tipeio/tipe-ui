<template>
  <main :class="$style.main">
    <section :class="$style.layout">
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
        <slot/>
      </section>
      <footer :class="$style.footer"/>
    </section>
  </main>
</template>

<script>
import vueTypes from 'vue-types'
import NavLinkShape from '@/types/NavLink'
import UserShape from '@/types/User'
import TipeSidebar from '@/components/Sidebar'
import TipeTopbar from '@/components/Topbar'

export default {
  name: 'ContentPage',
  components: {
    TipeSidebar,
    TipeTopbar
  },
  props: {
    navLinks: vueTypes.arrayOf(vueTypes.shape(NavLinkShape)),
    user: vueTypes.shape(UserShape)
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
    'nav section aside'
    'nav footer footer';
  grid-template-rows: 5rem 1fr 3rem;
  grid-template-columns: 5rem 1fr auto;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--gray-lightest);
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
}

.stage {
  grid-area: section;
  background-color: var(--gray-lightest);
}

.footer {
  grid-area: footer;
}
</style>
