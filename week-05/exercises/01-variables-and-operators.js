// 1 - Variables y operadores

/* 
    a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de 
    ambos números en una 3er variable.
*/
console.log ('---) Exercise 1-a)');
var a = 10;
var b = 12;
var c = a + b ;
console.log ('The result of ', a, '+', b,'is :', c);
/*
    b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
*/
console.log ('---) Exercise 1-b)');
var cad1 = 'Hello ';
var cad2 = 'world';
var cad3 = cad1 + cad2;
console.log (cad3);
/*
    c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
    guardando el resultado de la suma en una 3er variable (utilizar length).
*/
console.log ('---) Exercise 1-c');
var str1 = 'How';
var str2 = 'many';
var str3 = (str1.length+str2.length);
console.log ('The phrase "', str1, str2, '" has', str3, 'words');


