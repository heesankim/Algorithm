function solution(s) {
    let middle = s.length / 2
    if(s.length % 2 === 0){
        return s[middle-1] + s[middle]
    }
    else{
        return s[Math.floor(middle)]
    }
    console.log(middle)
}