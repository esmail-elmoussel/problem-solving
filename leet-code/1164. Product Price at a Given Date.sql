WITH all_products AS (
  SELECT DISTINCT product_id FROM products
), last_change_date AS (
  SELECT product_id, MAX(change_date) AS change_date FROM products
  WHERE change_date <= '2019-08-16'
  GROUP BY product_id
), all_products_last_change_date AS (
  SELECT a.product_id, change_date FROM all_products a
  LEFT JOIN last_change_date b ON a.product_id = b.product_id
)

SELECT a.product_id, IFNULL(b.new_price, 10) AS price FROM all_products_last_change_date a
LEFT JOIN products b 
ON b.product_id = a.product_id
AND b.change_date = a.change_date
