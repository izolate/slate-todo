import { Store as IDBStore, get, set } from './vendor/idb-keyval.js';

import env from './env.js';
import { formatISODate } from './utils.js';

const _initialRecord = { todos: [] };

class Store {
  // Database name
  _databaseName = env.databaseName;

  // Store name within the database
  _storeName = env.storeName;

  // Re-usable database instance
  _store = new IDBStore(this._databaseName, this._storeName);

  // Today's date in ISO-8601 format
  get _today() {
    return formatISODate();
  }

  // Gets a database record, and creates one if it doesn't exist.
  async _get(key = this._today) {
    const record = await get(key, this._store);
    if (record) return record;
    await set(key, _initialRecord, this._store);
    return get(key, this._store);
  }

  // Updates the record
  _set = (record, key = this._today) => set(key, record, this._store);

  async addTodo(text, isDone = false) {
    const record = await this._get();
    record.todos.push({ text, isDone });
    return this._set(record);
  }

  async listTodos() {
    console.log({ today: this._today });
    const { todos = [] } = await this._get();
    return todos;
  }

  async updateTodo(todo) {
    console.log('Updating todo', todo);
    console.log(this._databaseName);
    console.log(this._storeName);
    console.log(this._store);
  }

  async toggleDone(index) {
    const record = await this._get();
    const { isDone } = record.todos[index];
    record.todos[index].isDone = !isDone;
    await this._set(record);
  }

  async deleteTodo(index) {
    const record = await this._get();
    record.todos.splice(index, 1);
    await this._set(record);
  }
}

export default new Store(env.storeName);
