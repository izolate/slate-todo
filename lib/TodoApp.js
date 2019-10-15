import Vue from './vendor/vue/vue.esm.browser.js';
import TodoList from './components/TodoList.js';
import CreateTodo from './components/CreateTodo.js';

import store from './store.js';
import { getDayName } from './utils.js';

const today = new Date();

export default new Vue({
  el: '#app',
  components: {
    'todo-list': TodoList,
    'create-todo': CreateTodo,
  },
  data() {
    return {
      todos: [],
      day: getDayName(today.getDay()),
    };
  },
  methods: {
    async addTodo(text) {
      await store.addTodo(text);
      this.todos = await store.listTodos();
    },
    async deleteTodo(index) {
      await store.deleteTodo(index);
      this.todos = await store.listTodos();
    },
    async toggleDone(index) {
      await store.toggleDone(index);
      this.todos = await store.listTodos();
    },
    async updateTodo({ index, text }) {
      await store.updateTodo(index, text);
      this.todos = await store.listTodos();
    },
  },
  async mounted() {
    const todos = await store.listTodos();
    this.todos = todos;
  },
});
