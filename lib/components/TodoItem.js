import store from '../store.js';

const template = `<div>
  <input
    type="text"
    v-model="text"
    v-bind:disabled="done"
    @blur="update"
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
  props: {
    text: String,
    done: Boolean,
  },
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
