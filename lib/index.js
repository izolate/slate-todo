import Vue from './vendor/vue/vue.esm.browser.js';
import TodoApp from './TodoApp.js';

import { getDayName } from './utils.js';

// Add current day class to body tag
const today = new Date();
document.body.classList.add(getDayName(today.getDay()).toLowerCase());

// Disable production warning
Vue.config.productionTip = false;

window.TodoApp = TodoApp;
