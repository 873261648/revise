import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import Hljs from 'highlight.js/lib/core';
import hlJSPackage from 'highlight.js/lib/languages/javascript';


import './assets/css/default.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css';

Hljs.registerLanguage('javascript', hlJSPackage);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')