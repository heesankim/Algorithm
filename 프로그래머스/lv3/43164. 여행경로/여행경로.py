def solution(tickets):
    def dfs(route, tickets):
        if not tickets:
            return route
        current = route[-1]
        destinations = [ticket[1] for ticket in tickets if ticket[0] == current]
        if not destinations:
            return None
        destinations.sort()
        for destination in destinations:
            remaining_tickets = tickets.copy()
            remaining_tickets.remove([current, destination])
            result = dfs(route + [destination], remaining_tickets)
            if result:
                return result
        return None

    return dfs(["ICN"], tickets)
