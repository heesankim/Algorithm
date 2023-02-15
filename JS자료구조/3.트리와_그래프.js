class Node {
  constructor(data) {
    this.data = data;
    // this.child = []; // 이진트리가 아닌 트리가 됨
    this.left = null;
    this.left = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.데이터수 = 0;
  }
  length() {
    return this.데이터수;
  }

  insert(data) {
    // data가 들어오면 알아서 자리를 찾아가도록 만들어야 함
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data === 순회용현재노드.data) {
        return; // 중복이 되면 안되니까.
      }
      if (data < 순회용현재노드.data) {
        if (!순회용현재노드.left) {
          // left가 비어있으면
          순회용현재노드.left = 새로운노드;
          this.데이터수 += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      }
      if (data > 순회용현재노드.data) {
        if (!순회용현재노드.right) {
          // left가 비어있으면
          순회용현재노드.right = 새로운노드;
          this.데이터수 += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
  }
  DFS() {
    let 결과값 = [];
    let 스택 = [this.root]; // 스택의 length가 0이될떄 까지 꺼낸다.

    while (스택.length !== 0) {
      let current = 스택.pop();
      if (current.right) {
        스택.push(current.right);
      }
      if (current.left) {
        스택.push(current.left);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }
  BFS() {
    let 결과값 = [];
    let 큐 = [this.root];
    while (큐.length !== 0) {
      let current = 큐.shift();
      if (current.left) {
        큐.push(current.left);
      }
      if (current.right) {
        큐.push(current.right);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }
}

let t = new Tree(5); // root 노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

console.log(t.root.data);
console.log(t.root.left.data);
console.log(t.root.right.data);
console.log(t.root.left.left.data);
console.log(t.root.left.right.data);
console.log(t.root.right.left.data);
console.log(t.root.right.right.data);

console.log(t.DFS());
console.log(t.BFS());
