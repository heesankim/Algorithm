def solution(spell, dic):
    print("".join(sorted(spell)))
    print(sorted(dic[0]))
    for i in dic:
        if sorted(spell) == sorted(i):
            return 1
        else:
            continue
    return 2

# 35분까지 