<template>
  <div :class="css.wrapper">
    <div :class="css.title">404</div>
    <div :class="css.description">
        Прости но нет такой <span :class="css.through">еды</span> страницы
    </div>
  </div>
</template>

<script>
import css from './NotPage.css';
export default {
  name: 'NotPage',
  data() {
    return {
      css
    };
  }
};
</script>
