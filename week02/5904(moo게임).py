# 5904 moo 게임
import sys

sys.setrecursionlimit(10**5)
N = int(sys.stdin.readline())

n=0 
p=3 # S(n) 의 길이 = p(n)

# N번째 문자열을 찾기 위해서 봐야 하는 S(n)의 길이 p와 n을 탐색
# p(n) = p(n-1) + (n + 3) + p(n-1)
while N > p: 
    n += 1
    p = p*2 + n+3
    

# N번째 글자를 return하는 함수
def moo(N, p, n):
    if N==1: return "m"
    elif N==2 : return "o"
    elif N==3 : return "o"
    elif n > 0 :
        # p(n) = p(n-1) + (n + 3) + p(n-1)
        side = (p-n-3)//2  # S(n-1)의 길이 
        center = n+3  # 양쪽 side를 제외한 가운데 부분 길이

        # moo 순열을 구간 1,2,3으로 3분할함
        range1 = side 
        range2 = side + center + 1

        # 구간 1 = S(n-1)
        if N <= range1 : return (moo(N, side, n-1))  
        # 구간 2 = "m" + "o"*2n
        elif N == range1 +1 : return 'm' 
        elif range1+1 < N < range2 : return 'o'
        # 구간 3 = S(n-1)
        else: 
            return (moo(N - side - center, side, n-1))

print (moo(N, p, n))