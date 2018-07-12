<template>
  <div :data-tipe-ui="$options.name">
    <div class="header">
      <tipe-sidebar-button icon="options"/>
    </div>
    <div
      class="body"
      @mouseover="bodyHovered = true"
      @mouseout="bodyHovered = false"
    >
      <nav class="scrollable">
        <tipe-sidebar-link
          v-for="(link, i) in links"
          :key="i"
          :active="isButtonActive(link)"
          :icon="link.icon"
          :label="link.label"
          :url="link.url"
        />
      </nav>
    </div>
    <div class="footer">
      <tipe-sidebar-button icon="layout" />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeSidebarLink from './SidebarLink.vue'
import TipeSidebarButton from './SidebarButton.vue'

export default {
  name: 'TipeSidebar',
  components: {
    TipeSidebarLink,
    TipeSidebarButton
  },
  props: {
    links: vueTypes.arrayOf(interfaces.navLink)
  },
  data() {
    return {
      bodyHovered: false
    }
  },
  computed: {
    isButtonActive() {
      return link => link.active && !this.bodyHovered
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeSidebar'] {
  display: grid;
  height: 100%;
  width: 5rem;
  padding: 0;
  margin: 0;
  background-color: var(--purple);
  grid-template-rows: auto 1fr auto;
  transition: width 0.3s ease-out;
}

.header,
.body,
.footer {
  display: flex;
  flex-direction: column;
}

.body {
  overflow: hidden;
}

/* hide scrollbar */
.body > .scrollable {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}
</style>
