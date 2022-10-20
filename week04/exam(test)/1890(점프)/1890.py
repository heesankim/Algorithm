# 풀지 못했습니다.
import sys
input = sys.stdin.readline

# 반드시 오른쪽이나 아래로 이동 , // 0은 더이상 진행을 막는 종착점
# 한 번 점프를 할 때 , 방향을 바꾸면 안됨
# 오른쪽 점프, 아래쪽 점프 두 가지 경우만 존재

# 왼쪽모서리에서 오른쪽 모서리로 가야하는 
# 경로의 갯수를 구해라

n = int(input())

dp = [list(map(int, input().split())) for _ in range(n)]


start = dp[0][0]
sum = 0
# 오른쪽, 아래를 계속해서 자신의 값만큼 인덱스를 이동시키다가 0을 만나면 경우의수 + 1.
for i in range(n): 
    for j in range(n):
        
        sum = start + dp[i][j] + dp[i][j+dp[i][j]]  # 오른쪽 이동하는 경우
        dp[i][j] + dp[i+dp[i][j]][j]  # 아래로 이동하는 경우

        
    



