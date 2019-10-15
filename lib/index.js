import Vue from './vendor/vue/vue.esm.browser.js';
import TodoApp from './TodoApp.js';

import { getDayColor } from './utils.js';

// Add current day class to body tag
const today = new Date();
document.body.classList.add(getDayColor(today.getDay()));

// Disable production warning
Vue.config.productionTip = false;

window.TodoApp = TodoApp;
