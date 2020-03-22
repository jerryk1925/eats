<template>
  <component :is="layout" id="app">
    <router-view />
  </component>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  },
  mounted() {
    console.log(this.$route.meta);
  }
};
</script>

<style>
#app {
  /*font-family: 'San Francisco';*/
  font-family: system-ui;
  box-sizing: border-box;
  font-size: var(--root-font-size-small);
}
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
