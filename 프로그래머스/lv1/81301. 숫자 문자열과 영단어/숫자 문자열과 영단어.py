def solution(s):
    
    result = s.replace("one","1")
    result = result.replace("two","2")
    result = result.replace("three","3")
    result = result.replace("four","4")
    result = result.replace("five","5")
    result = result.replace("six","6")
    result = result.replace("seven","7")
    result = result.replace("eight","8")
    result = result.replace("nine","9")
    result = result.replace("zero","0")
    
    return int(result)

# str= "BlockDMask Blog.";
# print(f"str : {str}\n")

# # find 예제1
# print("1. str.find('찾을 문자')")
# result1 = str.find('a')   # 문자가 있는 경우
# result2 = str.find('Z')   # 문자가 없는 경우