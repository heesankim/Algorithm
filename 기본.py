# 변수명을 사용할 때는 예약어랑 비슷한 걸 안쓰는게 좋다.
# input()
# 함수 이기 때문에 입력한 값을 반환해 준다.

# 입력한 값을 리턴해준다.

# 변수 - 값을 저장하는 공간.

# 변수에 할당 될 수 있는게 값이다.


# a = input().split(" ")

# print(a)

# a = "Life is too short"
# print(a.split(" "))
# ['Life', 'is', 'too', 'short']


# print(int('3.5')) # 오류  문자열 형으로 들어왔을 때는 정수형태만 받아서 숫자형으로 바꿔준다
print(int('3'))  # 3
print(int(3.5))  # 3

# ~~~~ () 라는 것은 ~~가 함수라는 거다

# list() 함수.

# 떠오르는 것들 직접 코드 짜보고 어떻게 되는지 확인.

my_list = [1, 2, 3]
result = my_list * 3
print(result)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]



# range를 사용해서 숫자를 만든 뒤 숫자를 문자열로 변환
# >>> a = list(map(str, range(10)))
# >>> a
# ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

# 실수로 저장된 리스트의 모든 요소를 정수로 변환
# >>> a = [1.2, 2.5, 3.7, 4.6]
# >>> a = list(map(int, a))
# >>> a
# [1, 2, 3, 4]


# input().split()과 map
# input.().split()을 사용한 뒤에 변수 한 개에 저장해보면 리스트인지 확인할 수 있다.

# >>> a = input().split()
# 10 20 (입력)
# >>> a
# ['10', '20']
# # map을 사용해서 정수로 변환
# >>> a = map(int, input().split())
# 10 20 (입력)
# >>> list(a) # list로 변환
# [10, 20]