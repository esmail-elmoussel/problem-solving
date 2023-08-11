WITH products_first_year AS (
  SELECT 
  product_id, MIN(year) AS first_year
  FROM sales
  GROUP BY product_id
)

SELECT 
p.product_id, first_year, quantity, price
FROM products_first_year p
LEFT JOIN sales s 
ON p.product_id = s.product_id AND p.first_year = s.year
