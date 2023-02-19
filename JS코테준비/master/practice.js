function vaildAnagram(firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < firstStr.length; i++) {
    let letter = firstStr[i];
    if (lookup[letter]) {
      lookup[letter] = lookup[letter] + 1;
    } else {
      lookup[letter] = 1;
    }
  }
  for (let i = 0; i < secondStr.length; i++) {
    let letter = secondStr[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(vaildAnagram("heesanKim", "Kimsanhee"));
console.log(vaildAnagram("naagram", "anagram"));
console.log(vaildAnagram("dkqokzmw", "qdki8iwq"));
