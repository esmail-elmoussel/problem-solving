-- Problem Link: https://leetcode.com/problems/count-salary-categories/

WITH categories AS (
  SELECT 'High Salary' AS name
  UNION
  SELECT 'Low Salary' AS name
  UNION
  SELECT 'Average Salary' AS name
), accounts_with_categories AS (
  SELECT
  *,
  CASE 
    WHEN income < 20000 THEN 'Low Salary' 
    WHEN income >= 20000 AND income <= 50000 THEN 'Average Salary'
    WHEN income > 50000 THEN 'High Salary'
  END  AS category
  FROM accounts
)

SELECT c.name AS category, COUNT(a.account_id) AS accounts_count
FROM categories c
LEFT JOIN accounts_with_categories a ON a.category = c.name
GROUP BY c.name
