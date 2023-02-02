function solution(babbling) {
    var answer = 0;
    possible = ['aya', 'ye', 'woo', 'ma']
    babbling.forEach((babb) => {
        let babb_len = babb.length
        possible.forEach((word) => {
            if(babb.includes(word)){
                babb_len -= word.length
            }
        })
        if (babb_len === 0){
            answer ++;
        }
    })
    return answer;
}