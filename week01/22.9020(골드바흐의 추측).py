# 의사코드부터.

# 1보다 큰 자연수 중에 1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다.
# 골드바흐의 추측은 유명한 정수론의 미해결 문제이다.
# 2보다 큰 모든 짝수는 두소수의 합으로 나타낼 수 있다는 것이다.  이러한 수를 골드바흐 수라고 한다.

# 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다.

# 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.

# 2보다 큰 짝수 n이 주어졌을 떄, n의 골드바흐 파티션을 출력하는 프로그램을 작성하라.

# 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차가 가장 작은 것을 출력한다.

def is_prime(n):
    if n == 1:
        return False
    for j in range(2, int(n**0.5) + 1):
        if n % j == 0:
            return False
    return True


for _ in range(int(input())):
    num = int(input())

    a = num//2
    b = num//2

    while a > 0:
        if is_prime(a) and is_prime(b):
            print(a, b)
            break
        else:
            a = a - 1
            b = b + 1
