<template>
  <div
    :data-tipe-ui="$options.name"
    :class="size"
  >
    <div class="header">
      <button
        title="preview"
        @click="handlePreview"
      >
        <tipe-icon
          :color="previewIconColor"
          icon="view"
          height="1rem"
          width="1rem"
        />
      </button>
    </div>
    <div class="body">
      <component
        :is="is"
        :value="internalValue"
        @change="handleChange"
        @preview="internalPreview = true"
      />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeMarkdownEditor from './MarkdownEditor'
import TipeMarkdownViewer from './MarkdownViewer'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeMarkdown',
  components: {
    TipeMarkdownEditor,
    TipeMarkdownViewer,
    TipeIcon
  },
  props: {
    preview: vueTypes.bool.def(true),
    value: vueTypes.string.def(''),
    size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium')
  },
  data() {
    return {
      internalValue: this.value,
      internalPreview: this.preview
    }
  },
  computed: {
    is: props =>
      props.internalPreview ? 'tipe-markdown-viewer' : 'tipe-markdown-editor',

    previewIconColor() {
      return this.internalPreview ? '#16e4a4' : '#b5baca'
    },

    rootClassObject: props => ({
      [props.size]: true
    })
  },
  methods: {
    handleChange(value) {
      this.internalValue = value
      this.$emit('change', value)
    },
    handlePreview() {
      this.internalPreview = !this.internalPreview
      this.$emit('preview', this.internalPreview)
    }
  }
}
</script>

<style scoped>
[data-tipe-ui='TipeMarkdown'] {
  width: 100%;
  margin: 0;
  border: 1px solid var(--gray);
  border-radius: 0.25rem;
  outline: none;
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: var(--purple-dark);
  box-sizing: border-box;
  resize: none;
  display: grid;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 100%;
}

[data-tipe-ui='TipeMarkdown'].small {
  height: 12rem;
}

[data-tipe-ui='TipeMarkdown'].medium {
  height: 22rem;
}

[data-tipe-ui='TipeMarkdown'].large {
  height: 34rem;
}

.header {
  width: 100%;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  box-sizing: border-box;
}

.body {
  padding: 2rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
}
</style>
