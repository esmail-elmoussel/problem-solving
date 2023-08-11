WITH customers_with_first_order_and_first_delivery AS (
  SELECT 
  customer_id, 
  MIN(order_date) AS first_order_date, 
  MIN(customer_pref_delivery_date) AS first_delivery_date
  FROM delivery
  GROUP BY customer_id
)

SELECT 
ROUND(
  COUNT(CASE WHEN first_order_date = first_delivery_date THEN 1 END) 
  / 
  COUNT(customer_id) * 100
, 2) AS immediate_percentage
FROM customers_with_first_order_and_first_delivery
