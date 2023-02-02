def solution(n, lost, reserve):
    answer = 0
    lost_ = list(set(lost) - set(reserve))
    reserve_ = list(set(reserve) - set(lost))
    lost.sort()
    reserve.sort()
    if not lost:
        return n
    for l in lost_:
        n -= 1
        for r in reserve_:
            if (abs(l - r) == 1):
                reserve_.remove(r)
                n += 1
    return n