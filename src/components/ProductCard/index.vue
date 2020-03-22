<template>
  <div :class="css.wrapper">
    <div>
      <div :class="css.name">{{ product.name }}</div>
      <!--      <div>Избраное</div>-->
    </div>
    <div :class="css.description">
      {{ product.description }}
    </div>
    <div :class="css.title">
      Пищевая ценность
    </div>
    <div :class="css.nutritionalList">
      <div
        :class="css.nutritionalItem"
        v-for="nutritional in product.nutritional"
        :key="nutritional.id"
      >
        <div :class="css.nutritionalCount">{{ nutritional.count }}</div>
        <div :class="css.nutritionalName">{{ nutritional.name }}</div>
        <div :class="css.nutritionalUnit">{{ nutritional.unit }}</div>
      </div>
    </div>
    <div :class="css.title">ИНГРИДЫ</div>
    <div>
      <div v-for="ingredient in product.ingredients" :key="ingredient.id">
        <div></div>
        <div>
          <div>{{ ingredient.count }}</div>
          <div>{{ ingredient.name }}</div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="attribute in product.attributes" :key="attribute.id">
        {{ attribute.name }}
      </div>
    </div>
    <div>
      <button>кнопка1</button>
      <button>кнопка2</button>
    </div>
  </div>
</template>

<script>
import css from './ProductCard.css';
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  data() {
    return {
      css
    };
  }
};
</script>
