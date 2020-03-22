import Vue from 'vue';
import App from './App.vue';
import { DefaultLayout, NoSidebarLayout } from '@/lib/config';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';
import Default from '@/layouts/Default';
import NoSidebar from '@/layouts/NoSidebar.vue';
import './assets/fonts/index.css';
import 'normalize.css';

Vue.config.productionTip = false;
Vue.component(DefaultLayout, Default);
Vue.component(NoSidebarLayout, NoSidebar);
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
