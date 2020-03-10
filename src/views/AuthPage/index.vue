<template>
  <div :class="$style.wrapper">
    <form :class="$style.form" @submit="submit">
      <h1 :class="$style.title">Вперед</h1>
      <div :class="$style.marginTop">
        <ui-input v-model="name" id="name" name="name" placeholder="Имя" />
      </div>
      <div :class="$style.marginTop">
        <ui-input
          v-model="password"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div :class="$style.marginTop">
        <ui-button type="submit">Ввойти</ui-button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { password as confirmPassword, name as confirmName } from '@/config';
import { useStore } from '@/hooks/useStore';
import { useRouter } from '@/hooks/useRouter';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
export default {
  name: 'AuthPage',
  setup() {
    const store = useStore();
    const { route, router } = useRouter();
    console.log(route, router, store);
    const name = ref('');
    const password = ref('');
    const submit = e => {
      e.preventDefault();
      if (name.value === confirmName && password.value === confirmPassword) {
        console.log('qweqwe');
      }
    };
    return {
      name,
      password,
      submit
    };
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
