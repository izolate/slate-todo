import store from '../store.js';

const template = `<div>
  <input
    type="text"
    v-model="todo.text"
    @blur="update"
    :disabled="todo.isDone"
  />
  <button
    type="button"
    @click="toggleDone"
  >Done</button>
  <button
    type="button"
    @click="remove"
  >Delete</button>
</div>`;

export default {
  template,
  props: ['todo'],
  methods: {
    update() {
      this.$emit('update-todo', {
        index: this.$vnode.key,
        text: this.todo.text,
      });
    },
    remove() {
      this.$emit('delete-todo', this.$vnode.key);
    },
    toggleDone() {
      this.$emit('toggle-done', this.$vnode.key);
    },
  },
};
