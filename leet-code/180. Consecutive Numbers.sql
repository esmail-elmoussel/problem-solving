SELECT DISTINCT a.num AS ConsecutiveNums FROM logs a
JOIN logs b
ON a.num = b.num AND b.id = a.id + 1
JOIN logs c
ON a.num = c.num AND c.id = a.id + 2