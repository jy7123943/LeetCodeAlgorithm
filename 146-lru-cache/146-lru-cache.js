/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;

  this.LRUKeys = new Set();

  this.addLRUKeys = function(key) {
    this.LRUKeys.delete(key);
    this.LRUKeys.add(key);
  };

  this.getLRUKey = function() {
    const [key] = this.LRUKeys;
    this.LRUKeys.delete(key);
    return key;
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const value = this.cache.get(key);

  if (value === undefined) return -1;

  this.addLRUKeys(key);

  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.addLRUKeys(key);
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    this.cache.delete(this.getLRUKey());
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
