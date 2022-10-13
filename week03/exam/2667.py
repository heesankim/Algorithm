import sys
input = sys.stdin.readline

N = int(input())

graph = []

for _ in range(N):
    value = list(map(int, input().strip()))
    graph.append(value)

print(graph)


dy = (1, -1, 0, 0)
dx = (0, 0, 1, -1)

visited = [[False] * N for _ in range(N)]


def dfs(y, x, visited, count):
    visited[y][x] = True
    sum_count = count + 1

    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        # 탐색을 시작하는 조건
        if 0 <= ny < N and 0 <= nx < N and visited[ny][nx] == False and graph[ny][nx] == 1:
            # sum_count = dfs < 여기 실수함 (안적음)
            sum_count = dfs(ny, nx, visited, sum_count)

    return sum_count


result = []
cnt_resion = 0
for i in range(N):
    for j in range(N):
        if graph[i][j] == 1 and visited[i][j] == False:
            count = dfs(i, j, visited, 0)
            cnt_resion += 1
            result.append(count)


print(cnt_resion)
result.sort()
print("\n".join(str(s) for s in result))  # for문 보다 시간절약됨 쉬운구문임.
# 함수 호출 갯수가 구역의 개수
