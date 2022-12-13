<template>
  <div id='Layout'>
    <mc_header></mc_header>
  </div>
</template>

<script>
import mc_header from '@/components/mc_header'
export default {
  name: 'Layout',
  components: {
    mc_header
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
#Layout {
  width: 100%;
}
</style>