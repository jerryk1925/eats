<template>
  <Context id="app">
    <component :is="layout">
      <router-view />
    </component>
  </Context>
</template>

<script>
import Context from '@/context';

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
  components: {
    Context
  }
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
