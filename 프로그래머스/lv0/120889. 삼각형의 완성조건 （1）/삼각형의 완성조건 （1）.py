

def solution(sides):
    new_arr = sorted(sides)
    a = new_arr
    if a[0] + a[1] <= a[2]: return 2
    else: return 1