def solution(my_string, index_list):
    # 문자열 my_string과 정수 배열 index_list가 매개변수
    answer = ''
    for i in range(len(index_list)):
        answer = answer + my_string[index_list[i]]
    return answer