// 2 - Strings 

/*
    a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
     mayúscula (utilizar toUpperCase).
*/
console.log ('---) Exercise 2-a)');
var cadena = 'San Antonio Spurs';
console.log (cadena.toUpperCase());
/*
    b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
    primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log ('---) Exercise 2-b)');
var string = 'Cleveland Cavaliers';
var newstring = string.substring(0,5);
console.log (newstring);
/*
    c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
    últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log ('---) Exercise 2-c)');
var string2 = 'Toronto Raptors';
var newstring2 = string2.substring(string2.length - 5);
console.log (newstring2);
/* 
    d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
    primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
console.log ('---) Exercise 2-d)');
var string3 = 'dallas mavericks';
var newstring3 = string3.substring(0,1).toUpperCase() + string3.substring(1,string3.length).toLowerCase();
console.log (newstring3);
/*
    e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log ('---) Exercise 2-e)');
var string4 = 'Milwaukee Bucks';
var pos = string4.indexOf(' ');
console.log ('La posicion del primer espacio en blanco es: ', pos);
/*
    f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
    que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log ('---) Exercise 2-f)');
var string5 = 'charlotte hornets';
var pos = string5.indexOf(' ');
var newstring5 = string5.substring(0,1).toUpperCase() + string5.substring(1,pos).toLowerCase() + ' ' + 
string5.substring(pos+1,pos+2).toUpperCase() + string5.substring(pos+2,string5.length);
console.log (newstring5);














