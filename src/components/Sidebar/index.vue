<template>
  <aside :class="css.wrapper">
    <ul>
      <li :class="css.link" v-for="link in links" :key="link.url.toString()">
        <ButtonLink :url="link.url">
          <component :is="link.svg" />
        </ButtonLink>
      </li>
    </ul>
    <div :class="css.exit">
      Выход
    </div>
  </aside>
</template>

<script>
import ButtonLink from '@/components/UI/ButtonLink';
import css from './Sidebar.css';
import { SIDEBAR_LINKS } from './utils';

export default {
  name: 'Sidebar',
  data() {
    return {
      css,
      links: SIDEBAR_LINKS
    };
  },
  components: {
    ButtonLink
  }
};
</script>

<style module></style>
