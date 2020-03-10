<template>
  <main>
    <Sidebar />
    <slot />
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
