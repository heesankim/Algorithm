import sys
input = sys.stdin.readline

maximum = -1e9
minimum = 1e9
N = int(input())

# 입력받는  + , - , x , / 연산자의 갯수를 저장해놓고 시작한다. 어떻게?
# 카운트리스트를 만들거나 아니면 전부다 따로 하나씩 cnt를 만들거나 한다.
# 함수의 인자로는 처음의 주어진 값이 들어간다 . (1, cnt,cnt,cnt,cnt ... )
# 그리고 함수가 종료되는 조건은 만약에 마지막 번째 값이 들어가거나 모든 연산자의 cnt가 0이 되었을 때 이다.(합이 0? 리스트라면)
# 그리고 함수가 종료될때 계산된 값을 리스트에 저장한다.


nodes = list(map(int, input().split()))

value_list = []
operator_list = list(map(int, input().split()))


def dfs(depth, cur, plus_cnt, minus_cnt, mult_cnt, divide_cnt):
    global maximum
    global minimum
    if depth == N:
        if maximum < cur:
            maximum = cur
        if minimum > cur:
            minimum = cur
        return

    if plus_cnt > 0:
        dfs(depth + 1, cur + nodes[depth],
            plus_cnt-1, minus_cnt, mult_cnt, divide_cnt)

    if minus_cnt > 0:
        dfs(depth + 1, cur - nodes[depth], plus_cnt,
            minus_cnt-1, mult_cnt, divide_cnt)
    if mult_cnt > 0:
        dfs(depth + 1, cur * nodes[depth], plus_cnt,
            minus_cnt, mult_cnt-1, divide_cnt)

    if divide_cnt > 0:
        flag = 1
        if cur < 0:
            flag = -1

        dfs(depth + 1, (cur * (flag) //
            nodes[depth]) * flag, plus_cnt, minus_cnt, mult_cnt, divide_cnt-1)


dfs(1, nodes[0], operator_list[0], operator_list[1],
    operator_list[2], operator_list[3])

print(maximum)
print(minimum)
