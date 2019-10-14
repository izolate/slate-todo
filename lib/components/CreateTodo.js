import store from '../store.js';

const template = `<div id="create-todo">
  <input
    class="input"
    type="text"
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
