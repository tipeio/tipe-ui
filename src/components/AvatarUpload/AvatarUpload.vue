<template>
  <!--UPLOAD-->
  <div v-if="!avatar" :data-tipe-ui="$options.name" class="add-avatar">
    <input type="file" name="uploadFieldName" :disabled="isSaving" @change="uploadAvatar"
      accept="image/*" class="input-file">  
    <type-icon
      icon="avatar-upload"
      :width="styleObject.width"
      :height="styleObject.height"
    />
    <p v-if="isInitial" class="subtitle">Add avatar</p>
    <p v-else-if="isSaving" class="subtitle"> Uploading avatar...</p>
    <p v-else-if="uploadError" class="error">
      Accpeted formats: JPG, JPEG, GIF or PNG
    </p>
  </div>
  <!--success-->
  <img v-else :src="avatar" />
</template>

<script>
import TypeIcon from '../Icon'
import vueTypes from 'vue-types'
import { isImage } from '../../utils'

export default {
  name: 'AvatarUpload',
  components: {
    TypeIcon
  },
  props: {
    avatar: vueTypes.string,
    size: vueTypes.string.def('150')
  },
  data() {
    return {
      uploadError: null,
      isSaving: null,
      isInitial: !this.avatar
    }
  },
  computed: {
    styleObject() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      } 
    }
  },
  methods: {
    uploadAvatar(e) {
      this.isInitial = false
      this.isSaving = true

      const file = e.target.files[0]
      if (!file.type || !isImage(file.type)) {
        this.isSaving = false
        this.uploadError = true
        return
      }

      this.$emit('onUpload', file)
    }
  }
}
</script>

<style scoped lang="postcss">
.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.add-avatar {
  display: grid;
  cursor: pointer;
  position: relative;
  width: 100%;
  grid-row-gap: 1rem;
  justify-content: center;
  align-content: start;

  & .circle {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: var(--gray-blue-light);
  }

  & .outside {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: var(--text-gray-light) dashed 1px;
  }

  & .subtitle {
    font-size: 1rem;
    color: var(--text-gray-normal);
    margin: 0;
    text-align: center;
  }

  & .error {
    font-size: 1rem;
    color: var(--error);
    margin: 0;
    text-align: center;
  }
}
</style>
