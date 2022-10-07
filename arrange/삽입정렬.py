# # 합병 정렬이란?
# # 퀵 정렬과 마찬가지로 분할 정복 알고리즘을 사용한 정렬 방법이다.
# # 퀵 정렬은 평균적인 속도가 매우 빠른 대신 최악의 경우는 O(n²)의 시간 복잡도를 가진다는 단점이 있었다.
# # 빠를 때는 엄청 빠른데 느릴 때는 엄청 느리다는 것이다.
# # 하지만 합병 정렬은 최악의 경우에도 O(nlogn)의 시간 복잡도를 보장한다는 장점이 있다.


import sys
N = int(sys.stdin.readline())
unsorted_list = [sys.stdin.readline().strip() for _ in range(N)]


# def merge_sort(array):
#     def sort(unsorted_list):
#         # 크기가 1이면 반환
#         if len(unsorted_list) <= 1:
#             return unsorted_list

#         # 리스트를 2분할
#         mid = (len(unsorted_list))//2
#         left = unsorted_list[:mid]
#         right = unsorted_list[mid:]

#         # 2분할한 리스트를 각각 merge sort 진행
#         merge_sort(left)
#         merge_sort(right)
#         merge(left, right)

#     def merge(left, right):

#         i, j, k = 0, 0, 0
#         # sorted_list = []

#         while i < len(left) and j < len(right):
#             if left[i] < right[i]:
#                 array[k] = left[i]
#                 # sorted_list.append(left[i])
#                 i += 1
#             else:
#                 array[k] = right[j]
#                 # sorted_list.append(right[i])
#                 j += 1
#         while i < len(left):
#             array[k] = left[i]
#             # sorted_list.append(left[i])
#             i = i + 1
#         while j < len(right):
#             array[k] = right[j]
#             # sorted_list.append(right[j])
#             j = j + 1
#         print(array)
#     sort(array)


# merge_sort(unsorted_list)


def merge_sort(a):
    def sort(unsorted_list):
        if len(unsorted_list) <= 1:
            return
        # 두개의 리스트로 분할. 아래에서 재귀적으로 시행
        mid = len(unsorted_list) // 2
        left = unsorted_list[:mid]
        right = unsorted_list[mid:]
        merge_sort(left)
        merge_sort(right)
        merge(left, right)

    def merge(left, right):
        i = 0
        j = 0
        k = 0
        while (i < len(left)) and (j < len(right)):
            if left[i] < right[j]:
                a[k] = left[i]
                i += 1
                k += 1
            else:
                a[k] = right[j]
                j += 1
                k += 1
        # 남은 데이터 삽입
        while i < len(left):
            a[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            a[k] = right[j]
            j += 1
            k += 1
        print(a)
    sort(a)


merge_sort(unsorted_list)
