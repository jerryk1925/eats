<template>
  <main id="app">
    <component :is="layout">
      <router-view />
    </component>
  </main>
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
  },
};
</script>

<style>
#app {
  font-family: system-ui;
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
</style>
