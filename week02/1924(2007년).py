from calendar import THURSDAY
import sys

# 1월 1일 월요일 ,,8,15,22,29
# 1,3,5,7,8,10,12월 이라면 31일까지있다
# 4,6,9,11월은 30일까지
# 2월은 28일까지 있다.

month, day = map(int, sys.stdin.readline().split())

# 요일을 알고싶은 월과 일이 들어온다.

dayOftheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
# 1월 1일이 월요일이다. 365일중에 7로 나누어서 나머지가 1이면 월요일이다.
month_list = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31,
            6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
still_month = 0

for i in range(1, month):
    still_month += month_list[i]  # 주어진 달의 그전까지의 일 수를 다 더해준다

# 다더해진 일수에 입력받은 일 수를 더해준다.
totalDay = still_month + day

print(dayOftheWeek[totalDay % 7])
