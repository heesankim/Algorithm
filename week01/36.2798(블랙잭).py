import itertools
import sys

N, M = map(int, sys.stdin.readline().split())

given_card = []
sum_cards = []
gap = []

given_card = list(map(int, sys.stdin.readline().split()))

# print(given_card)

# print(list(itertools.combinations(given_card, 3)))

for i in list(itertools.combinations(given_card, 3)):
    
    if sum(i) <= M:
        sum_cards.append(sum(i))
        gap.append(abs(sum(i) - M))




# print(sum_cards) 
# print(gap)

gap_min = min(gap)


for i in range(len(gap)):
    if gap[i] == gap_min:
        print(sum_cards[i])
        break