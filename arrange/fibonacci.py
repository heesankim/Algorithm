
N = int(input())

def fibonacci(N):
  if N == 0:
    return 0
  elif N == 1 or N == 2:
    return 1
  else:
    return fibonacci(N-1) + fibonacci(N-2)

print(fibonacci(N))