<template>
  <div id='mc_header'>
    <mc_header_top></mc_header_top>
    <mc_header_nav></mc_header_nav>
  </div>
</template>

<script>
import mc_header_top from './mc_header_top'
import mc_header_nav from './mc_header_nav'
export default {
  name: 'mc_header',
  components: {
    mc_header_top,
    mc_header_nav
  },
  data() {
    return {}
  },
  created() {
    console.log(this)
  },
  mounted() {
    console.log(this)
  },
  beforeUpdate() {
    console.log(this)
  },
  beforeDestroy() {
    console.log(this)
  },
  computed: {}
}
</script>

<style scoped lang='less'>
#mc_header {
  //   width: 100%;
  padding: 15px;
}
</style>