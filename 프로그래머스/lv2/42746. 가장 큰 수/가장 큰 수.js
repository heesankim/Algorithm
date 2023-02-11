function solution(numbers) {
    let a = numbers.map(c=> c + '');
    let result = a.sort((a,b) => (b+a) - (a+b)).join('');
    return result[0]==='0'? '0' : result;
}