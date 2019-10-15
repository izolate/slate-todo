import store from '../store.js';

const template = `<div class="todo-item" v-bind:class="{ 'is-done': isDone }">
  <input
    type="text"
    class="input"
    v-model="text"
    v-bind:disabled="isDone"
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
    isDone: Boolean,
  },
  data() {
    return {
      text: this.initialText,
    };
  },
  watch: {
    initialText(newText, oldText) {
      if (oldText !== newText) {
        this.text = newText;
      }
    },
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
