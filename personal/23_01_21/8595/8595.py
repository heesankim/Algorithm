# 히든 넘버   @ 시간초과 뜸... ㅠㅠ
# 최대한 효울적으로 짜자 -> 복잡도 고려
# 코드가 돌아간다고 만사 아님

import sys
input = sys.stdin.readline

input()
s = input()
hidden_numbers = []
is_number = False
num = ""
for i in s:
    if i not in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']:
        if len(num) < 7 and len(num) != 0:
            hidden_numbers.append(int(num))
        num = ""
        continue
    num += i
if len(num) < 7 and len(num) != 0:
        hidden_numbers.append(int(num))
print(sum(hidden_numbers))
# 아스키 코드 크기 비교로 풀어도 됨