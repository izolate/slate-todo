import store from '../store.js';

const template = `<div>
  <h2>Create a todo</h2>
  <input
    type="text"
    v-model="text"
    @keyup.enter="createTodo"
  />
</div>`;

export default {
  template,
  data() {
    return {
      text: '',
    };
  },
  methods: {
    async createTodo(e) {
      if (this.text) {
        this.$emit('add-todo', this.text);
        this.text = '';
      }
    },
  },
};
