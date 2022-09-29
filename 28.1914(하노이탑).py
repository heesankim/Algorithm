N = int(input())


def hanoi(n, start, final, middle):
    if n == 1:
        print(start, final)
        return

    else:
        hanoi(n-1, start, middle, final)
        # middel 은 중간기둥 . 
        print(start, final)  # 제일 큰 원반 move
        hanoi(n-1, middle, final, start)
    
    return

print(2**N-1)
if N <= 20:
    hanoi(N,1,3,2)
