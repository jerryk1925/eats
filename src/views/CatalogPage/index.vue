<template>
  <div>
    <div>
      <h1 :class="css.title">Каталог <b>еды</b></h1>
    </div>
    <div>
      <Tabs
        :tabs="tabs"
        :current-tab="currentTab"
        @change="changeTab($event)"
      />
    </div>
    <div>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import Tabs from '@/components/Tabs';
import { products } from './utils';

import css from './CatalogPage.css';

export default {
  name: 'CatalogPage',
  data() {
    return {
      css,
      currentTab: 1,
      tabs: [
        {
          id: 0,
          name: 'All'
        },
        {
          id: 1,
          name: 'Burgers'
        },
        {
          id: 2,
          name: 'Pizza'
        }
      ],
      products: products
    };
  },
  methods: {
    changeTab(id) {
      this.currentTab = id;
    }
  },
  components: {
    Tabs,
    ProductCard
  }
};
</script>
