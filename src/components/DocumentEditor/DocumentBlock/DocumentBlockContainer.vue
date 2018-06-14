<template>
  <tipe-document-block
    :type="type"
    :value="value"
    :name="name"
    :status="status"
    :success-message="successMessage"
    :warning-message="warningMessage"
    :error-message="errorMessage"
  >
    <component
      :status="status"
      :value="value"
      :size="large"
      :is="is"
    />
  </tipe-document-block>
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlock from './DocumentBlock'
import TipeSwitch from '@/components/Switch'

export default {
  name: 'DocumentBlockContainer',
  components: {
    TipeDocumentBlock,
    TipeSwitch
  },
  props: documentBlockShape,
  computed: {
    is() {
      return 'tipe-switch'
    }
  }
}
</script>
