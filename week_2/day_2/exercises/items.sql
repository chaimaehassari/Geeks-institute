CREATE DATABASE public;
CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) ,
    price INT 
);
CREATE TABLE CUSTOMERS(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
    birth_date DATE
);
select * from items
ORDER BYprice ASC;

SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

SELECT first_name, last_name, birth_date FROM CUSTUMERS
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name FROM CUSTOMERS
ORDER BY last_name DESC;
