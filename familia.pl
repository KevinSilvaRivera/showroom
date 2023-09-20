%Hechos  que establecen relaciones familiares

padre(enrique, floricelda).
padre(enrique, gloria).
padre(enrique, joaquin).
padre(estreboldo, ilma).
padre(estreboldo, suceli).
padre(estreboldo, saydel).
padre(estreboldo, guilebaldo).
padre(joaquin, kevin).
padre(joaquin, yoeli).
padre(mariano, christianS).
padre(dilmar, christianV).
padre(dilmar, dilan).
padre(guilebaldo, ariadne).
padre(guilebaldo, guadalupe).

madre(mercedes, floricelda).
madre(mercedes, gloria).
madre(mercedes, joaquin).
madre(francisca, ilma).
madre(francisca, suceli).
madre(francisca, saydel).
madre(francisca, guilebaldo).
madre(ilma, kevin).
madre(ilma, yoeli).
madre(floricelda, christianS).
madre(suceli, christianV).
madre(suceli, dilan).
madre(dimas, ariadne).
madre(dimas, guadalupe).

hombre(enrique).
hombre(estreboldo).
hombre(joaquin).
hombre(mariano).
hombre(dilmar).
hombre(guilebaldo).
hombre(christianS).
hombre(saydel).
hombre(christianV).
hombre(dilan).
hombre(kevin).
hombre(yoeli).

mujer(mercedes).
mujer(francisca).
mujer(ilma).
mujer(floricelda).
mujer(gloria).
mujer(suceli).
mujer(dimas).
mujer(ariadne).
mujer(guadalupe).

%-----------------reglas para determinar relaciones familiares-----------------------------------

%regla para determinar si es padre
es_padre(Padre, Hijo) :- 
    padre(Padre, Hijo).

%regla para determinar si es madre
es_madre(Madre, Hijo) :-
    madre(Madre, Hijo).

%regla para determinar si es hermano
es_hermano(Hermano, Her) :- 
    padre(Padre, Hermano), 
    padre(Padre, Her), 
    Hermano \= Her.

%regla para determinar si es abuelo
es_abuelo(Abuelo, Nieto) :- 
    (padre(Abuelo, Hijo) ; madre(Abuelo, Hijo)), 
    (padre(Hijo, Nieto) ; madre(Hijo, Nieto)).

%regla de para determinar si es tio
es_tio(Tio, Sobrino) :- padre(Padre, Tio), padre(Padre, Hijo), (padre(Hijo, Sobrino) ; madre(Hijo, Sobrino)), Hijo \= Tio.  

%regla para determinarsi es primo
es_primo(Primo, X) :- 
    (padre(Padre, Primo) ; madre(Padre, Primo)), 
    padre(Padre2, Padre), padre(Padre2, Hijo), 
    (padre(Hijo, X) ; madre(Hijo, X)), 
    Hijo \= Padre.

%regla para determinar si es pareja
es_pareja(Pareja, X) :-
    (padre(Pareja, Hijo) ; madre(Pareja, Hijo)), 
    (padre(X, Hijo) ; madre(X, Hijo)), 
    Pareja \= X, 
    !. 