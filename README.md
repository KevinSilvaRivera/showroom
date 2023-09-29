# Familia.pl

Este es un programa Prolog que implementa un árbol genealógico. Incluye hechos que establecen relaciones familiares, reglas para determinar si alguien es padre, madre, hermano, abuelo, tío, primo o pareja, y una consulta para encontrar a todas las personas en el árbol genealógico.

## Hechos

Los hechos que establecen relaciones familiares se definen utilizando los predicados 'Padre/2` y `Madre/2`. Por ejemplo, el hecho de que Enrique es el padre de Floricelda se representa de la siguiente manera:

`` `` ``
Padre (Enrique, Floricelda).
`` `` ``

Del mismo modo, el hecho de que Mercedes es la madre de Floricelda se representa de la siguiente manera:

`` `` ``
Madre (Mercedes, Floricelda).
`` `` ``

## Normas

Las reglas para determinar si alguien es padre, madre, hermano, abuelo, tío, primo o pareja se definen utilizando el `ES_PADRE/2`,` ES_MADRE/2`, `ES_HERMANO/2`,` ES_ABULO/2`,, `ES_TIO/2`,` ES_PRIMO/2` y `ES_PAREJA/2`.

Por ejemplo, la regla para determinar si alguien es padre se define de la siguiente manera:

`` `` ``
es_padre (padre, hijo):-
     Padre (Padre, Hijo).
`` `` ``

Esta regla establece que si el predicado `Padre/2` es cierto para un padre e hijo en particular, entonces el predicado` ES_PADRE/2` también es cierto para ese padre e hijo.

Del mismo modo, la regla para determinar si alguien es madre se define de la siguiente manera:

`` `` ``
es_madre (Madre, hijo):-
     Madre (Madre, Hijo).
`` `` ``

Esta regla establece que si el predicado `Madre/2` es cierto para una madre e hijo en particular, entonces el predicado` ES_MADRE/2` también es cierto para esa madre e hijo.

Las reglas para determinar si alguien es hermano, abuelo, tío, primo o pareja se definen de manera similar.

## Consulta

La consulta para encontrar a todas las personas en el árbol genealógico se define de la siguiente manera:

`` `` ``
findall (personalidad, (es_padre (personaje, _); es_madre (personaje, _)), persona).
`` `` ``

Esta consulta utiliza el predicado `FindAll/3` para encontrar a todas las personas que son padre o madre. Los resultados se almacenan en las `personajes