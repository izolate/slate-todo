import Vue from './vendor/vue.esm.browser.js';
import TodoList from './components/TodoList.js';
import CreateTodo from './components/CreateTodo.js';

import store from './store.js';

export default new Vue({
  el: '#todo',
  components: {
    'todo-list': TodoList,
    'create-todo': CreateTodo,
  },
  data() {
    return {
      todos: [],
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
