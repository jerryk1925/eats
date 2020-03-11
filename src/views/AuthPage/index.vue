<template>
  <div :class="css.wrapper">
    <form :class="css.form" @submit="submit">
      <h1 :class="css.title">Вперед</h1>
      <div :class="css.marginTop">
        <ui-input v-model="name" id="name" name="name" placeholder="Имя" />
      </div>
      <div :class="css.marginTop">
        <ui-input
          v-model="password"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div :class="css.marginTop">
        <ui-button type="submit">Ввойти</ui-button>
      </div>
    </form>
  </div>
</template>

<script>
import css from './AuthPage.css'
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
export default {
  name: 'AuthPage',
  data() {
    return {
      name: '',
      password: '',
      css
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$router.push('/');
    }
  },
  components: {
    'ui-input': Input,
    'ui-button': Button
  }
};
</script>

<style module>
.wrapper {
  background: var(--root-color-light-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form {
  width: 480px;
  background: white;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
}

.title {
  text-align: center;
  font-size: 26px;
  color: var(--root-color-black);
  margin: 0;
}

.marginTop {
  margin-top: 20px;
  width: 100%;
}
</style>
