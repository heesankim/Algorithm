def solution(babbling):
    answer = 0
    arr = ["aya", "ye", "woo", "ma"]
    
    for i in babbling:
        available = 0
        word = ''
        for j in i: 
            word = word + j
            if word in arr:
                word = ""
                available += 1
        if word.strip() == "" and available > 0:  # 빈문자열이고 한번 이상씩 지워졌다면
            answer = answer + 1
    return answer

