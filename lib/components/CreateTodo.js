import store from '../store.js';
import { getRandomTask } from '../utils.js';

const template = `<div id="create-todo">
  <input
    class="input"
    type="text"
    v-bind:placeholder="task"
    v-model="text"
    @keyup.enter="addTodo"
  />
  <button
    class="btn"
    @click="addTodo"
  >Add</button>
</div>`;

export default {
  template,
  data() {
    return {
      text: '',
      task: getRandomTask(),
    };
  },
  methods: {
    async addTodo(e) {
      if (this.text) {
        this.$emit('add-todo', this.text);
        this.text = '';
      }
    },
  },
};
