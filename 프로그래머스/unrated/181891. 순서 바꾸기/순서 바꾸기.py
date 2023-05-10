def solution(num_list, n):
    arr = "".join(map(str,num_list))
    arr1 = list(map(int,arr[0:n]))
    arr2 = list(map(int,(arr[n:len(num_list)])))
    print(arr1)
    print(arr2)
    
    return arr2 + arr1





# str = "ABCDE"
# slice = str[1:3] # "BC"