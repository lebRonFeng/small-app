import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import 'lib-flexible'
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
 