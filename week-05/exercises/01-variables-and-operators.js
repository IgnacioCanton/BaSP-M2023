// 1 - Variables y operadores

/* 
    a)Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de 
    ambos números en una 3er variable.
*/
console.log ('---) Ejercicio 1-a)');
var a = 10;
var b = 12;
var c = a + b ;
console.log ('El resultado de ', a, '+', b,'es :', c);
/*
    b)Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/
console.log ('---) Ejecicio 1-b)');
var cad1 = 'Hola ';
var cad2 = 'tutores';
var cad3 = cad1 + cad2;
console.log (cad3);
/*
    c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
    guardando el resultado de la suma en una 3er variable (utilizar length).
*/
console.log ('---) Ejercicio 1-c');
var str1 = 'Cuantas';
var str2 = 'letras';
var str3 = (str1.length+str2.length);
console.log ('La oracion', str1, str2, 'tiene', str3, 'letras');


