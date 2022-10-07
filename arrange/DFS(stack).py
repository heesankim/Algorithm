# 함수선언
def dfs_stack(start):
    # visited 선언, 순회한 정점 저장
    visited = []
    # 인자값으로 넣은 시작점(start)를 리스트에 넣어 스택에 저장
    # 넣고 시작한다.
    stack = [start]

    # 파이썬의 falsy값에는 0, "", False, None 뿐만 아니라
    # {},()같은 빈자료형도 포함된다.
    while stack:
        # top 변수로 stack에서 pop한 값을 저장하고 visited에 저장
        top = stack.pop()
        visited.append(top)

        # graph에서 top을 키 값으로 밸류(리스트)값 조회 후 순회
        for adj in graph[top]:
            # 만약 adj 값이 visitid에 저장되지 않은 경우, stack에 차례로 저장.
            if adj not in visited:
                stack.append(adj)

    # while문 종료시, visited 반환
    return visited

# 스택구조를 활용한 DFS함수이다. 핵심은 스택에 차례로 저장하고, 후입선출을 하기 때문에, 방문한 값에 직접 연결된 정점보다도 새로이 획득한 정점을 먼저 순회한다. 때문에 마찬가지로 깊이 우선의 탐색이 이루어진다.