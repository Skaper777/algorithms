class Cache {
  constructor(size) {
    // размер кеша в ключах, которые он может сохранить.
    this.size = size;
    this._map = new Map();
  }

  // Получение из кеша по ключу
  // (обычно ключом как раз выступает аргумент функции, которую мы хотим кешировать)
  get(key) {
    return this._map.get(key);
  }

  // Запись в кеш
  set(key, value) {
    if (this._map.size === this.size) {
      this.delete(this._first());
    }

    this._map.set(key, value);
  }

  _first() {
    return this._map.keys().next().value;
  }

  // Удаление по ключу, если вдруг нам это пригодится
  delete(key) {
    this._map.delete(key);
  }
}