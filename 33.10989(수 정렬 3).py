# 수 정렬하기 (선택 정렬)

N = int(input())
array = []
for _ in range(N):
    array.append(int(input()))


def selectionSort(array):
    for i in range(len(array)-1):
        lowestNumberIndex = i
        for j in range(i+1, len(array)):
            if array[j] < array[lowestNumberIndex]:
                lowestNumberIndex = j

        if(lowestNumberIndex != i):
            temp = array[i]
            array[i] = array[lowestNumberIndex]
            array[lowestNumberIndex] = temp
    return array


selectionSort(array)
for i in array:
    print(i)
