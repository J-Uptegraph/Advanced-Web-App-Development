-- 1. Retrieve the first name and last name for all customers, ordered by last name then first name

SELECT first_name, last_name
FROM customers
ORDER BY last_name, first_name


-- 2. Retrieve the count of products, grouped by category

SELECT category, COUNT(*)
FROM products
GROUP BY  fcategory

-- 3. Retrieve the average price of products, grouped by category

SELECT category, ROUND(AVG(price),2)
FROM products
GROUP BY category

-- 4. Retrieve the customer name and count of orders, grouped by customer, ordered by highest to lowest count

SELECT first_name, last_name, count(*)
FROM customers INNER JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY count (*) DESC

-- 5. Retrieve the customer name and total sum of prices of products ordered, grouped by customer, ordered by highest to lowest sum

SELECT first_name, last_name, SUM(price*quantity)
FROM customers INNER JOIN orders ON customers.id =
orders.customer_id INNER JOIN order_product ON orders.id =
order_product.order_id INNER JOIN products ON products.id = order_product.product_id
GROUP BY customers.id
ORDER BY SUM(price*quantity) DESC