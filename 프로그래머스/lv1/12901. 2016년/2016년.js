function solution(a, b) {
    var answer = '';
    let count = -1;
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const date = ['FRI','SAT','SUN','MON','TUE','WED','THU'] 

    for(let i =0; i < a-1;i++){
         count += month[i]
    }   
    count += b

    const final = count % 7 
    answer = date[final]

    return answer;
}


// 윤년은 2월이 29일까지 있다.
// 두수 a , b 입력 받아 a월 b일이 무슨 요일인지 알아내라