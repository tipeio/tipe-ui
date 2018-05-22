<template>
  <div
    :class="rootClass"
    :data-tipe-ui="$options.name"
  >
    <div class="header">
      <tipe-sidebar-button
        icon="options"
        @click="toggleCompressed"
      />
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
          :compressed="compressed"
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
import TipeSidebarLink from './SidebarLink.vue'
import TipeSidebarButton from './SidebarButton.vue'

const linkTypes = vueTypes.shape({
  icon: vueTypes.string,
  label: vueTypes.string,
  url: vueTypes.string,
  active: vueTypes.bool.def(false)
})

export default {
  name: 'TipeSidebar',
  components: {
    TipeSidebarLink,
    TipeSidebarButton
  },
  props: {
    links: vueTypes.arrayOf(linkTypes)
  },
  data() {
    return {
      bodyHovered: false,
      compressed: false
    }
  },
  computed: {
    rootClass() {
      return {
        compressed: this.compressed
      }
    },
    isButtonActive() {
      return link => link.active && !this.bodyHovered
    }
  },
  methods: {
    toggleCompressed() {
      this.compressed = !this.compressed
    }
  }
}
</script>

<style lang="postcss">
[data-tipe-ui='TipeSidebar'] {
  display: grid;
  height: 100%;
  width: 15rem;
  padding: 0;
  margin: 0;
  background-color: var(--purple);
  grid-template-rows: auto 1fr auto;
  transition: width 0.3s ease-out;
}

[data-tipe-ui='TipeSidebar'].compressed {
  width: 5rem;
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
