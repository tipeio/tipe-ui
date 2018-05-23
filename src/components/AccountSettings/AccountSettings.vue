<template>
  <div class="grid">
    <div class="panel-content">
      <div class="row">
        <icon-badge icon="rocket" />
        <tipe-progress 
          :used="8.08" 
          :total="40"
          title="Space" 
          unit="GB" />
      </div>
      <accordian text="Folder Details"/>
      <accordian text="Settings"><tipe-switch text="File Sharing" /><tipe-switch text="Backup" /></accordian>
      <recent-activity />
    </div>
  </div>
</template>

<script>
import IconBadge from '../IconBadge'
import Accordian from '../Accordian'
import TipeProgress from '../Progress'
import TipeSwitch from '../Switch'
import RecentActivity from '../RecentActivity'

export default {
  name: 'AccountSettings',
  components: {
    IconBadge,
    Accordian,
    TipeProgress,
    TipeSwitch,
    RecentActivity
  }
}
</script> 

<style scoped lang="postcss">
.grid {
  display: grid;
  width: 252px;
  grid-template-columns: 1rem auto 1rem;
  grid-template-areas:
    '. . .'
    '. content .'
    '. . .';
}
.panel-content {
  display: grid;
  grid-area: content;
  grid-auto-flow: row;
  grid-row-gap: 1.5rem;
}

.row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
</style>
