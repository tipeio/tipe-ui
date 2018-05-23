<template>
  <div class="content">
    <div class="row">
      <icon-badge icon="file" />
      <space-progress 
        :used-space="8.08" 
        :total-space="40" 
        unit="GB" />
    </div>
    <accordian text="Folder Details"/>
    <accordian text="Settings"><tipe-switch text="File Sharing" /><tipe-switch text="Backup" /></accordian>
    <accordian text="Recent Activity"><activity-item 
      title="Sam Smith update api key" 
      time="a moment ago"/><activity-item 
        title="Sam Smith update api key" 
        time="a moment ago"/></accordian>
  </div>
</template>

<script>
import IconBadge from '../IconBadge'
import Accordian from '../Accordian'
import SpaceProgress from '../SpaceProgress'
import TipeSwitch from '../Switch'
import ActivityItem from '../RecentActivity/ActivityItem'

export default {
  name: 'AccountSettings',
  components: {
    IconBadge,
    Accordian,
    SpaceProgress,
    TipeSwitch,
    ActivityItem
  }
}
</script> 

<style scoped lang="postcss">
.content {
  width: 252px;
  display: grid;
  grid-row-gap: 1.5rem;
}

.row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
</style>
