const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

// 추가적인 메소드를 이용해서 삽입,삭제를 구현하고 싶은것임.
// console.log(list.head)
// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.head.next.next.value);

// 일단 하나의 노드로 되어있는걸 class를 이용해 분리하자.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }
  toString() {
    // return "hello world";
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s = s + `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }
    return `[${s.slice(0, -2)}]`; // 마지막에 , 전까지만 출력해라는 뜻
  }

  get fullData() {
    // return "hello world";
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s = s + `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`); // 마지막에 , 전까지만 출력해라는 뜻
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < index - 1; i++) { // 삽입할 자리 까지 가는 것
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data)

    새로운노드.next = 순회용현재노드.next
    순회용현재노드.next = 새로운노드;

    return `[${s.slice(0, -2)}]`;
  }
}

link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);
link.append(10);
link.append(20);
link.append(30);
link.insert(2,1000)

console.log(link);
console.log(link.length());
console.log(link.toString());
console.log(typeof link.toString());
console.log(link.fullData);
console.log(typeof link.fullData);

// console.log(link.head.next.data);
// console.log(link.head.next.next.data);
// console.log(link.head.next.next.next.data);
// console.log(link.head.next.next.next.next.data);
// console.log(link.head.next.next.next.next.next.data);
// console.log(link.head.next.next.next.next.next.next.data);
