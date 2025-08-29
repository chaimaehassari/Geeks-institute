UPDATE film
SET language_id = 6
WHERE film_id = 1
returning *
; 



select count(*) from film
select * from inventory;


SELECT language_id FROM language WHERE name = 'German'


UPDATE film
SET language_id = (
    SELECT language_id FROM language WHERE name = 'German'
)
WHERE film_id IN (1, 2, 3); 

select * from rental;


INSERT INTO customer (store_id, first_name, last_name, email, address_id, active)
VALUES (2, 'Ali', 'Hassan', 'ali.hassan@email.com', 5, 1);

DROP TABLE customer_review;

SELECT COUNT(*) AS nombre_locations_non_retournees
FROM rental
WHERE return_date IS NULL;



SELECT 
    f.title,
    f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;


select * from film;

select f.title,f.description
from film f
join film_actor fc on f.film_id=fc.film_id
join actor a on fc.actor_id=a.actor_id
WHERE f.description ILIKE '%sumo%'
AND
a.first_name = 'Penelope' AND a.last_name = 'Monroe'

select title
from film
where length <60 and rating ='R'

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;






