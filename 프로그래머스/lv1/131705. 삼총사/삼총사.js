function solution(numbers) {
  // let res = []
    let count = 0;

  for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
      for (let k=j+1; k<numbers.length; k++){
        // res.push(numbers[i]+numbers[j]+numbers[k])
          if(numbers[i]+numbers[j]+numbers[k] === 0) count = count + 1
      }
    }
  }
  // let result = res.filter((re) => re === 0).length
  // return result
    return count
}