WITH queue_with_total_weights AS (
  SELECT *, SUM(weight) OVER (ORDER BY turn) AS total_weight
  FROM queue
)

SELECT person_name
FROM queue_with_total_weights
WHERE total_weight <= 1000
ORDER BY turn DESC
LIMIT 1