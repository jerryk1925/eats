<template>
  <div :class="css.wrapper">
    <div :class="css.title">
      <UiLink url="/auth">
        Кушать кушать кушать
      </UiLink>
    </div>
  </div>
</template>

<script>
import css from './Home.css';
import Link from '@/components/UI/Link';
export default {
  name: 'HomePage',
  data() {
    return {
      css
    };
  },
  methods: {
    qwe() {
      console.log('qwe');
    }
  },
  components: {
    UiLink: Link,
  }
};
</script>
