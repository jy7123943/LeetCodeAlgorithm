
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  while (this.stack2.length) {
    const shifted = this.stack2.shift();

    this.stack1.unshift(shifted);
  }
  this.stack1.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.stack1.length) {
    const shifted = this.stack1.shift();

    if (this.stack1.length === 0) {
      return shifted;
    }
    this.stack2.unshift(shifted);
  }

  return this.stack2.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.stack1.length) {
    const shifted = this.stack1.shift();

    this.stack2.unshift(shifted);
    
    if (this.stack1.length === 0) {
      return shifted;
    }
  }

  return this.stack2[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */