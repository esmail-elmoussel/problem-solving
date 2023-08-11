WITH single_department_employees AS (
  SELECT employee_id
  FROM employee
  GROUP BY employee_id
  HAVING COUNT(*) = 1
)

(
  SELECT employee_id, department_id
  FROM employee
  WHERE primary_flag = 'Y'
)
UNION
(
  SELECT e.employee_id, e.department_id
  FROM employee e
  JOIN single_department_employees s ON s.employee_id = e.employee_id
) 