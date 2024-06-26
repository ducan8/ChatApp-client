import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';


createApp(App)
    .use(bootstrap)
    .use(store)
    .use(router)
    .mount('#app')
