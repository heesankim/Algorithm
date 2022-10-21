# 시험 떄 풀지 못함

import sys
input = sys.stdin.readline

n = int(input())

scores = []
dp = []
for _ in range(n):
    score = list(map(int, input().split()))
    scores.append(score)
    dp.append(list([0]*n))

# 출발하는 곳을 1로 둔다.
dp[0][0] = 1 
# dp 테이블의 인덱스가 의미 하는 건 (0,0) 에서 (i,j) 까지 가는 경로의 수이다.
# 최종적으로 구하고자 하는건 [n-1][n-1] 인덱스 값.
for i in range(n):
    for j in range(n):
        # 도착 지점에 도달 하면 반복문을 종료한다.
        if i == n-1 and j == n-1:
            break
        if j + scores[i][j] < n:
            # 오른쪽 이동하는 경우
            dp[i][j + scores[i][j]] += dp[i][j]
            # 아래로 이동하는 경우
        if i + scores[i][j] < n:
            dp[i + scores[i][j]][j] += dp[i][j]
print(dp[n-1][n-1])
