
# 수 정렬하기 (버블 정렬)
import sys
N = int(sys.stdin.readline())
array = [sys.stdin.readline().strip() for i in range(N)]


def bubble_sort(array):
    unsorted_index = len(array) - 1
    sorted = False

    while not sorted:
        sorted = True
        for i in range(unsorted_index):
            if array[i] > array[i+1]:
                array[i], array[i+1] = array[i+1], array[i]
                sorted = False
        unsorted_index = unsorted_index - 1
    return array


bubble_sort(array)

for i in array:
    print(i)

# 버블 , 삽입 정렬 둘다 시간 초과 뜸
