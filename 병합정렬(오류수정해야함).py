# 합병 정렬이란?
# 퀵 정렬과 마찬가지로 분할 정복 알고리즘을 사용한 정렬 방법이다.
# 퀵 정렬은 평균적인 속도가 매우 빠른 대신 최악의 경우는 O(n²)의 시간 복잡도를 가진다는 단점이 있었다.
# 빠를 때는 엄청 빠른데 느릴 때는 엄청 느리다는 것이다.
# 하지만 합병 정렬은 최악의 경우에도 O(nlogn)의 시간 복잡도를 보장한다는 장점이 있다.

import sys
N = int(sys.stdin.readline())
unsorted_list = [sys.stdin.readline().strip() for i in range(N)]


def merge_sort(unsorted_list):
    # 크기가 1이면 반환
    if len(unsorted_list) <= 1:
        return unsorted_list

    # 리스트를 2분할
    mid = (len(unsorted_list))//2
    left = unsorted_list[:mid]
    right = unsorted_list[mid:]

    # 2분할한 리스트를 각각 merge sort 진행
    left_ = merge_sort(left)
    right_ = merge_sort(right)
    return merge(left_, right_)


def merge(left, right):

    i, j = 0, 0
    sorted_list = []

    while i < len(left) and j < len(right):
        if left[i] < right[i]:
            sorted_list.append(left[i])
            i += 1
        else:
            sorted_list.append(right[i])
            j += 1
    while i < len(left):
        sorted_list.append(left[i])
        i = i + 1
    while j < len(right):
        sorted_list.append(right[j])
        j = j + 1
    return sorted_list


print(merge_sort(unsorted_list))

# 오류수정해야함