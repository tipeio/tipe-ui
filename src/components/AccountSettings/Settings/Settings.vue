<template>
  <accordian text="Settings"><tipe-switch 
    text="File Sharing" 
    sublabel="Turn on to share your file changes and updates" /><tipe-switch text="Backup" /></accordian>
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
  data: function() {
    return {}
  }
}
</script>
