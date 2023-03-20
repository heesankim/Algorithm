function solution(my_string) {
    let sum = 0;
    const numStr = "123456789"
    for(let i = 0; i < my_string.length; i++){
        if(numStr.includes(my_string[i])){ 
           sum = sum + Number(my_string[i])
        }
    }
    return sum;
}