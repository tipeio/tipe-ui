<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="grid">
    <div 
      class="close" 
      @click="close"><tipe-icon icon="close"/></div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
      <div class="seperator"><tipe-seperator /></div>
      <tipe-button 
        class="cancelBtn" 
        color="info"
        @click="cancel">Cancel</tipe-button>
      <tipe-button 
        class="rightBtn" 
        color="danger"
        @click="action">{{ buttonText }}</tipe-button>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeButton from '../Button'
import TipeSeperator from '../Seperator'
import TipeIcon from '../Icon'

export default {
  name: 'TipeConfirmModal',
  components: {
    TipeButton,
    TipeSeperator,
    TipeIcon
  },
  props: {
    title: vueTypes.string,
    subtitle: vueTypes.string,
    buttonText: vueTypes.string
  },
  methods: {
    close() {
      this.$emit('close')
    },
    action() {
      this.$emit('action')
    },
    cancel() {
      this.$emit('cancel')
      this.close()
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  background-color: #fff;
  border-radius: 0.5rem;
  width: 600px;
  max-height: 100%;
  grid-template-columns: 3rem auto 3rem;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    '. . close'
    'content content content';
  box-shadow: 5px 20px 40px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.close {
  background-color: var(--gray-light);
  grid-area: close;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.5rem 0 0;
  cursor: pointer;
}

.seperator {
  grid-area: seperator;
}

.content {
  grid-area: content;
  display: grid;
  width: 100%;
  align-content: start;
  grid-column-gap: 2rem;
  display: grid;
  grid-row-gap: 1.25rem;
  grid-template-rows: 1fr 1fr 1rem 0 4rem;
  grid-template-columns: 3rem auto auto 3rem;
  grid-template-areas:
    ' . title title .'
    ' . subtitle subtitle .'
    ' . . . .'
    'seperator seperator seperator seperator'
    '. cancelBtn rightBtn .';

  & .title {
    color: var(--error);
    grid-area: title;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
    justify-self: center;
  }

  & .subtitle {
    color: #627098;
    grid-area: subtitle;
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
  }

  & .cancelBtn {
    grid-area: cancelBtn;
    justify-self: end;
  }
  & .rightBtn {
    grid-area: rightBtn;
  }
}
</style>
