def solution(babbling):
    answer = 0
    arr = ["aya", "ye", "woo", "ma"]
    
    for i in babbling:
        flag = i
        syllables_count = 0
        for j in arr: 
            if flag.count(j) == 1:
                flag = flag.replace(j," ", 1)
                syllables_count += 1
        if flag.strip() == "" and syllables_count == len(arr):
            answer += 1
    return answer