SELECT p.project_id, ROUND(AVG(e.experience_years), 2) AS average_years
FROM employee e JOIN project p ON e.employee_id = p.employee_id
GROUP BY p.project_id
