<template>
  <main>
    <Sidebar />
    <div :class="css.main">
      <slot />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import css from './Layout.css';
export default {
  name: 'Default',
  data() {
    return {
      css
    };
  },
  components: {
    Sidebar
  }
};
</script>

<style module>
.wrapper {
}
</style>
