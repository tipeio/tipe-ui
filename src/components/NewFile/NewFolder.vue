<template>
  <section :data-tipe-ui="$options.name">
    <tipe-file-name-input
      message="Press Enter to create a folder."
    />
    <section class="template-finder-section">
      <header>RECENT FOLDERS</header>
      <div class="content-window">
        <div class="scrollable">
          <div class="browser">
            <tipe-finder
              :files="folders"
              layout="grid"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TipeFileNameInput from './FileNameInput.vue'
import TipeFinder from '@/components/Finder'

export default {
  name: 'TipeNewFolder',
  components: {
    TipeFinder,
    TipeFileNameInput
  },
  props: {
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeNewFolder'] {
  display: grid;
  grid-template-rows: 11rem 1fr;
  height: 100%;
  width: 100%;
}

.template-finder-section {
  display: grid;
  grid-template-rows: 3rem 1fr;
  height: 100%;
  width: 100%;
}

.template-finder-section > header {
  color: var(--purple-dark);
  font-size: 1rem;
  font-weight: 600;
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
</style>
