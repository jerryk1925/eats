<template>
  <aside :class="css.wrapper">
    <ul>
      <li>
        <router-link to="/main">
          <Gear />
        </router-link>
      </li>
      <li>
        <Info />
      </li>
    </ul>
    <div>
      Выход
    </div>
  </aside>
</template>

<script>
import Gear from '@/assets/svg/gear.svg';
import Info from '@/assets/svg/info.svg';
import css from './Sidebar.css';
export default {
  name: 'Sidebar',
  data() {
    return {
      css
    };
  },
  components: {
    Gear,
    Info
  }
};
</script>

<style module></style>
