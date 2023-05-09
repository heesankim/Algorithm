#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

int solution(int n) {
    bool *prime_check = (bool *)calloc(n + 1, sizeof(bool));
    int answer = 0;

    for (int i = 2; i <= n; i++) {
        prime_check[i] = true;
    }

    for (int i = 2; i <= (int)sqrt(n); i++) {
        if (prime_check[i]) {
            for (int j = i * i; j <= n; j += i) {
                prime_check[j] = false;
            }
        }
    }

    for (int i = 2; i <= n; i++) {
        if (prime_check[i]) {
            answer++;
        }
    }

    free(prime_check);

    return answer;
}

int main() {
    int n = 7;
    int result = solution(n);
    printf("소수의 개수: %d\n", result);

    return 0;
}
