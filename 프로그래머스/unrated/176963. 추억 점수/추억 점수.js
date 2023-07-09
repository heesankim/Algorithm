function solution(name, yearning, photo) {
    let obj = {};
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i]
    }
    const result = photo.map(wordList => {
        return wordList.reduce((totalObj, word) => {
            return totalObj + (obj[word] || 0);
        }, 0);
    });
    return result;
}

/** 
    kali: 11
    mari: 1,
    don: 55,
    may: 5,
    kein: 10,
    kain: 1,
    
*/