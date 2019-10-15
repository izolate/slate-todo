import TodoItem from './TodoItem.js';

const template = `<section>
  <todo-item
    v-for="(todo, index) in todos"
    v-bind:initial-text="todo.text"
    v-bind:is-done="todo.isDone"
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
