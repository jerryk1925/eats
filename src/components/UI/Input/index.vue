<template>
  <div :class="$style.wrapper">
    <label :for="id" :class="$style.label">
      <input
        :class="$style.input"
        v-bind="$attrs"
        :id="id"
        :name="name"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', ($value = $event.target.value))"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String,
    type: {
      default: 'text',
      type: String
    },
    id: String,
    name: String,
    placeholder: {
      default: 'Placeholder',
      type: String
    }
  }
};
</script>

<style module>
.wrapper {
  width: 100%;
}

.label {
}

.input {
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--root-color-gainsboro);
  transition: 0.3s ease;
  width: 100%;

  &:focus {
    border-color: var(--root-color-blue);
  }
}
</style>
