<template>
  <div class="panel-content">
    <div class="row">
      <icon-badge 
        icon="rocket" 
        height="20px" 
        width="20px"/>
      <tipe-progress 
        :used="8.08" 
        :total="40"
        title="Space" 
        unit="GB" />
    </div>
    <accordian text="Folder Details"/>
    <tipe-settings />
    <recent-activity />
  </div>
</template>

<script>
import IconBadge from '../IconBadge'
import Accordian from '../Accordian'
import TipeProgress from '../Progress'
import RecentActivity from './RecentActivity'
import TipeSettings from './Settings'

export default {
  name: 'AccountSettings',
  components: {
    IconBadge,
    Accordian,
    TipeProgress,
    RecentActivity,
    TipeSettings
  }
}
</script> 

<style scoped lang="postcss">
/* grid-area is rendering as a for some season */
.panel-content {
  display: grid;
  grid-area: accountSettings;
  grid-auto-flow: row;
  grid-row-gap: 1.5rem;
  width: 100%;
}

.row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
</style>
