<template>
  <accordian text="Settings"><tipe-switch 
    v-model="sharing"
    :value="sharing"
    text="File Sharing"
    sublabel="Turn on to share your file changes and updates" /><tipe-switch 
      v-model="backup" 
      :value="backup" 
      text="Backup" />
  </accordian>
</template>

<script>
import Accordian from '../../Accordian'
import TipeSwitch from '../../Switch'

export default {
  name: 'TipeSettings',
  components: {
    Accordian,
    TipeSwitch
  },
  data() {
    return { sharing: false, backup: true }
  }
}
</script>
