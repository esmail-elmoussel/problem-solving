-- Problem Link: https://leetcode.com/problems/employee-bonus/

SELECT name, bonus FROM employee e 
LEFT JOIN bonus b 
ON e.empid = b.empid
WHERE b.bonus IS NULL OR b.bonus < 1000
