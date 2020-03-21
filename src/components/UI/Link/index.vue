<template>
  <router-link :to="url" :class="css.link">
    <slot />
  </router-link>
</template>

<script>
import css from './Link.css';
export default {
  props: {
    url: String
  },
  data() {
    return { css };
  }
};
</script>
