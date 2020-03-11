<template>
  <button :class="$style.wrapper" :type="type" v-on="$listeners">
    <div :class="$style.text">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      default: 'button',
      type: String
    }
  }
};
</script>

<style module>
.wrapper {
  outline: none;
  border-radius: 6px;
  border: 1px solid var(--root-color-blue);
  cursor: pointer;
  width: 100%;
  padding: 10px;
  background: white;
  transition: 0.2s;

  &:hover, &:focus {
    background: var(--root-color-blue);
  }

  &:hover .text,
  &:focus  .text{
    color: white;
  }
}

.text {
  color: var(--root-color-blue);
  font-weight: 500;
}
</style>
