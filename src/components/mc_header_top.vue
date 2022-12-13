<template>
  <div id='mc_header_top'>
    <img src="@/assets/img/logo.png" alt="">
    <div class="title">
      <span>LED显示屏控制系统解决方案</span>
      <span>LED Display Control System Solutions</span>
    </div>
    <el-dropdown class="select">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>chinese</el-dropdown-item>
        <el-dropdown-item>english</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-input class="search" placeholder="搜索" suffix-icon="el-icon-search" autofocus>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'mc_header_top',
  components: {},
  data() {
    return {}
  },
  created() {
    // console.log(this)
  },
  mounted() {
    // console.log(this)
  },
  beforeUpdate() {
    // console.log(this)
  },
  beforeDestroy() {
    // console.log(this)
  },
  computed: {}
}
</script>

<style scoped lang='less'>
#mc_header_top {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}

img {
  float: left;
  width: 150px;
  padding: 0 15px;
}

.title {
  float: left;
  padding: 0 15px;
  border-left: 1px solid rgb(210, 210, 210);
  span {
    display: block;
    &:nth-child(1) {
      font-size: 19px;
      color: rgb(100, 195, 45);
    }

    &:nth-child(2) {
      font-size: 14px;
      color: rgb(187, 187, 187);
    }
  }
}

.search {
  float: right;
  width: unset;
}
.select {
  margin-top: 10px;
  float: right;
  padding: 0 15px;
}
</style>