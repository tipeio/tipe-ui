<script>
import TipeTabsMenu from './TabsMenu'

export default {
  name: 'TipeTabs',
  components: {
    TipeTabsMenu
  },
  data() {
    return {
      internalActivePanelLabel: null
    }
  },
  computed: {
    /*
    Tabs derives it's data from the TabPanles components passed to the default slot.

    Vue uses a data structure called a vNode to represent components.
    Since Tabs derives data from components we needs to parse these vNodes
    to extract the props passed to the TabPanels.

    panelVNodes() filters the vNodes in $slots.default to get only the TabPanels
    returns: array of TabPanel vNodes
    */
    panelVNodes() {
      let panels = []

      if (!this.$slots.default) return panels

      const hasComponentOptions = vNode => vNode.componentOptions !== undefined

      const isPanel = vNode =>
        hasComponentOptions(vNode) &&
        vNode.componentOptions.tag === 'tipe-tabs-panel'

      panels = this.$slots.default.filter(isPanel)

      return panels
    },
    /*
    extracts the props on the TabPanels

    returns: an array of objects representing the panels
      example: [{ icon: String, label: String, active: boolean }, ...]
    */
    panels() {
      const extractProps = vNode => ({
        icon: vNode.componentOptions.propsData.icon,
        label: vNode.componentOptions.propsData.label,
        active: vNode.componentOptions.propsData.active
      })

      return this.panelVNodes.map(extractProps)
    },
    /*
    initial render:
      active panel is defined by TabPanel active prop or defaults to
      first panel
    */
    activePanelLabel() {
      const activePanel = this.panels.find(panel => panel.active)

      if (this.internalActivePanelLabel === null) {
        if (activePanel) {
          return activePanel.label
        } else if (this.panels.length) {
          return this.panels[0].label
        }
      }

      return this.internalActivePanelLabel
    },
    buttons() {
      return this.panels.map(panel => ({
        ...panel,
        active: this.activePanelLabel === panel.label
      }))
    },
    panel() {
      return this.panelVNodes.find(
        vNode =>
          vNode.componentOptions.propsData.label === this.activePanelLabel
      )
    }
  },
  methods: {
    onClickMenuButton(label) {
      this.internalActivePanelLabel = label
    }
  },
  render(h) {
    return h(
      'div',
      {
        style: { height: '100%', width: '100%' },
        attrs: { 'data-tipe-ui': this.$options.name }
      },
      [
        h(TipeTabsMenu, {
          props: { buttons: this.buttons },
          on: { click: this.onClickMenuButton }
        }),
        [this.panel]
      ]
    )
  }
}
</script>
