<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { provideRouter } from '@/hooks/useRouter';
import { provideStore } from '@/hooks/useStore';

export default {
  name: 'Context',
  setup(props, { root: { $store, $router, $route } }) {
    provideStore($store);
    provideRouter($router, $route);
  }
};
</script>
