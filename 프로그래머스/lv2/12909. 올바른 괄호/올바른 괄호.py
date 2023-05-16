def solution(s):
    count = 0
    if s[0] == ")":
        return False
    for i in s:
        if i == "(":
            count = count + 1
        elif i == ")":
            count = count - 1
            if count < 0:
                return False        
    if count == 0:
        return True
    return False


# 올바른괄호 커플들은 한쌍이기 때문에 사라져야 한다.
# 11시까지 ...!!!