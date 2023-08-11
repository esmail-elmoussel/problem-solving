-- Problem Link: https://leetcode.com/problems/rising-temperature/

SELECT weather.id FROM weather 
JOIN weather AS weather2
ON weather.recorddate = DATE_ADD(weather2.recorddate, INTERVAL 1 DAY)
WHERE weather.temperature > weather2.temperature
