class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    return result;
  }
  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);
let popValue = s.pop(2);
console.log("🚀 ~ file: 1.스택_큐.js:38 ~ popValue", popValue);
let emptyValue = s.empty();
console.log("🚀 ~ file: 1.스택_큐.js:39 ~ emptyValue", emptyValue);
let topValue = s.top();
console.log("🚀 ~ file: 1.스택_큐.js:40 ~ topValue", topValue);
let bottomValue = s.bottom();
console.log("🚀 ~ file: 1.스택_큐.js:47 ~ bottomValue", bottomValue)
