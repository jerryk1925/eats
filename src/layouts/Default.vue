<template>
  <main>
    <Sidebar />
    <div>
      <slot />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar';
export default {
  name: 'Default',
  components: {
    Sidebar
  }
};
</script>

<style module>
.wrapper{

}
</style>
