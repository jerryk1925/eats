<template>
  <div :class="css.list">
    <div
      :class="[css.item, currentTab === tab.id && css.active]"
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('change', tab.id)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
import css from './Tabs.css';
export default {
  name: 'Tabs',
  props: {
    tabs: Array,
    currentTab: Number
  },
  data() {
    return {
      css
    };
  }
};
</script>
