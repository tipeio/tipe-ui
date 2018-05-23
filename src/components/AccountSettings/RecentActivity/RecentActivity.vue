<template>
  <accordian text="Recent Activity">
    <activity-item 
      v-for="item in items" 
      :key="item.id" 
      :item="item"
    />
  </accordian>
</template>

<script>
import ActivityItem from './ActivityItem'
import Accordian from '../../Accordian'

export default {
  name: 'RecentActivity',
  components: {
    ActivityItem,
    Accordian
  },
  data: function() {
    return {
      items: [
        {
          title: 'Sam Smith update api key',
          time: 'a moment ago',
          id: '47357838'
        },
        {
          title: 'Sarah Scott created a document',
          time: 'one hour ago',
          id: '5389345'
        }
      ]
    }
  }
}
</script>
