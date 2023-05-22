def solution(strings, n):
    result = []
    listed = []

    # Create a list of tuples where each tuple contains the nth character
    # and the original string
    for s in strings:
        listed.append((s[n], s))

    # Sort the list of tuples. This will sort primarily by the first element
    # of each tuple (the nth character), and secondarily by the second element
    # (the original string)
    sortedListed = sorted(listed)
    # print(sortedListed)
    # Extract the original strings from the sorted list of tuples
    for _, s in sortedListed:
        # print(_) # 인덱스 0 1 2 
        # print(s) # 요소 abcd abce cdx
        result.append(s)

    return result
# 시작



# usun abed acar -> 이방법으로 한번 더 풀자


