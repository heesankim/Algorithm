import sys
input = sys.stdin.readline

N = int(input())

houses = []

for _ in range(N):
    value = list(map(int, input().strip()))
    houses.append(value)


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
        if 0 <= ny < N and 0 <= nx < N and visited[ny][nx] == False and houses[ny][nx] == 1:
            # sum_count = dfs < 여기 실수함 (안적음)
            sum_count = dfs(ny, nx, visited, sum_count)

    return sum_count


result = []
cnt_resion = 0
for i in range(N):
    for j in range(N):
        if houses[i][j] == 1 and visited[i][j] == False:
            count = dfs(i, j, visited, 0)
            cnt_resion += 1
            result.append(count)


print(cnt_resion)
result.sort()
for i in result:
    print(i)
# print('b'.join(str(i)for i in result)) # join 함수를 쓰려면 리스트안에 원소들이 문자열이여야 한다. 그래서 하나씩 순회하면서 문자열로 바꿈. 
# print("\n".join(str(s) for s in result))  # (애초에 원소가 문자열로 들어왔고 그걸 한줄씩 출력할때) for문 보다 join 내장함수가 시간절약됨.
# # 함수 호출 갯수가 구역의 개수
