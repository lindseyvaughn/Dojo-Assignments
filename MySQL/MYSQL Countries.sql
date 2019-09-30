SELECT countries.name, languages.language, languages.percentage
FROM countries 
JOIN languages ON countries.code = languages.country_code
WHERE language = 'Slovene';

SELECT cities.name AS country, COUNT (cities.id) AS number_cities
FROM countries 
JOIN cities ON countries.code = cities.country_code
GROUP BY countries.code
ORDER BY number_cities desc 



