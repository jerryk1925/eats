<template>
  <aside :class="$style.wrapper">
    <ul>
      <li>
        1
      </li>
      <li>
        1
      </li>
    </ul>
    <div>
      Выход
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style module>
.wrapper{
  position: fixed;
  height: 100vh;
  background: var(--root-color-blue);
  width: 160px;
}
</style>
