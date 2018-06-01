<template>
  <section :data-tipe-ui="$options.name">
    <tipe-file-name-input
      message="Press Enter to create a folder."
    />
    <section class="template-finder-section">
      <header>RECENT FOLDERS</header>
      <tipe-finder
        :files="folders"
        layout="grid"
      />
    </section>
  </section>
</template>

<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TipeFileNameInput from './FileNameInput.vue'
import TipeFinder from '@/components/Finder'

export default {
  name: 'TipeNewDocument',
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
.template-finder-section {
  padding-top: 3.625rem;
}

.template-finder-section > header {
  color: var(--purple-dark);
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 1.6875rem;
  box-sizing: border-box;
}
</style>
