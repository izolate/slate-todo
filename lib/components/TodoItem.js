import store from '../store.js';

const template = `<div class="todo-item">
  <input
    type="text"
    class="input"
    v-model="text"
    v-bind:disabled="done"
    @blur="update"
  />
  <div class="actions">
    <button
      type="button"
      class="btn btn-small"
      @click="toggleDone"
    >Done</button>
    <button
      type="button"
      class="btn btn-small"
      @click="remove"
    >Delete</button>
  </div>
</div>`;

export default {
  template,
  props: {
    initialText: String,
    done: Boolean,
  },
  data() {
    return {
      text: this.initialText,
    };
  },
  methods: {
    update() {
      this.$emit('update-todo', {
        index: this.$vnode.key,
        text: this.text,
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
