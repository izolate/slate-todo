import TodoItem from './TodoItem.js';

const template = `<section>
  <h1>To-Do List</h1>

  <todo-item
    v-for="(todo, index) in todos"
    v-bind:text="todo.text"
    v-bind:done="todo.isDone"
    v-bind:key="index"
    v-on="$listeners"
  ></todo-item>

</section>`;

export default {
  template,
  components: {
    'todo-item': TodoItem,
  },
  props: ['todos'],
};
