let names = ["Michael", "Melissa", "Andrea"];

// michal melissa andrea
// 0      1       2
// 엘리멘트 마다 붙어있는 인덱스가 있음
names.push("Ryu"); // O(1) 상수 시간
names.pop(); // O(1) 상수 시간
// 만약 배열 맨 앞에 새로운 요소를 추가한다면 인덱스를 새로 배정해야함(삭제도 마찬가지) O(N)
names.unshift("Ryu"); // O(N) 
names.shift(); // O(N)

// push와 pop 이 shift와 unshift보다 빠름(비어있는 배열 제외)
