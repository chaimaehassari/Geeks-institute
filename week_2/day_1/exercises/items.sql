
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
);

INSERT INTO items (name,price)VALUES
(" Small Desk",100),
("Large desk ",300),
("fan ",80);

INSERT INTO CUSTOMERS (first_name,last_name)VALUES
("Greg","jones"),
("Sandra","jones"),
("Scott","Scott"),
("Trevor","Green"),
("Melanie","Johnson");


SELECT * FROM items;
SELECT * FROM items WHERE price>80;
SELECT * FROM items WHERE price <= 300;
SELECT * FROM CUSTOMERS WHERE last_name = "Smith"; 
SELECT * FROM CUSTOMERS WHERE last_name = "Jones";
SELECT * FROM CUSTOMERS WHERE last_name <> "Scott";


