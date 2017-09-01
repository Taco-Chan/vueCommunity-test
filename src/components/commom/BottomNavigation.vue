<template>
<mu-paper class="bottom_nav">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="首页" title="首页" icon="home"/>
    <mu-bottom-nav-item value="发布" title="发布" icon="subject"/>
    <mu-bottom-nav-item value="消息" title="消息" icon="message"/>
    <mu-bottom-nav-item value="我的" title="我的" icon="person"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style media="screen">
.bottom_nav .mu-bottom-nav-shift-wrapper {
  display: flex;
  justify-content: space-around;
}

.bottom_nav {
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
