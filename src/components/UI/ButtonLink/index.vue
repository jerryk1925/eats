<template>
  <router-link :to="url" :class="css.wrapper">
    <slot />
  </router-link>
</template>

<script>
import css from './ButtonLink.css';
export default {
  name: 'ButtonLink',
  data() {
    return {
      css
    };
  },
  props: {
    url: String
  }
};
</script>
