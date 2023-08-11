-- Problem Link: https://leetcode.com/problems/product-sales-analysis-i/

SELECT product_name, year, price 
FROM Sales
JOIN Product ON Product.product_id = Sales.product_id
