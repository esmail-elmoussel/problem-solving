WITH managers AS (
    SELECT 
    reports_to AS employee_id, 
    COUNT(employee_id) AS reports_count,
    ROUND(AVG(age)) AS average_age
    FROM employees 
    GROUP BY reports_to 
)

SELECT e.employee_id, e.name, m.reports_count, m.average_age FROM managers m 
JOIN employees e ON m.employee_id = e.employee_id
ORDER BY e.employee_id
