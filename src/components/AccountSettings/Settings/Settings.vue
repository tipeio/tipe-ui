<template>
  <accordian text="Settings">
    <tipe-switch 
      :value="sharing"
      text="File Sharing"
      name="sharing"
      sublabel="Turn on to share your file changes and updates"
      @change="onChangeSharing" />
    <tipe-switch
      :value="backup"
      name="backup"
      text="Backup" 
      @change="onChangeBackup" />
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
  },
  methods: {
    onChangeSharing(val) {
      this.sharing = val
    },
    onChangeBackup(val) {
      this.backup = val
    }
  }
}
</script>
