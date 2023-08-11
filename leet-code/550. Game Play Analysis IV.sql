WITH players_first_login AS (
  SELECT 
  player_id, 
  MIN(event_date) AS first_login_date
  FROM activity
  GROUP BY player_id
)

SELECT ROUND(COUNT(a2.player_id) / COUNT(DISTINCT a1.player_id), 2) AS fraction
FROM activity a1
LEFT JOIN players_first_login a2
ON a1.event_date = DATE_ADD(a2.first_login_date, INTERVAL 1 DAY)
AND a1.player_id = a2.player_id
