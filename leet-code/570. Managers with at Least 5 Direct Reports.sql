-- Problem Link: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/

WITH managers AS (
    SELECT managerid FROM employee 
    GROUP BY managerid
    HAVING COUNT(id) >= 5
)

SELECT name FROM managers 
JOIN employee 
ON managers.managerid = employee.id
