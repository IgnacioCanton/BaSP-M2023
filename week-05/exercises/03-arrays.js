// 3 - Arrays 

/*
   a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", 
   "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
   "Octubre", "Noviembre", "Diciembre"] mostrar por consola los 
   meses 5 y 11 (utilizar console.log).
*/
console.log ('---) Exercise 3-a)');
var chain = ['Jannuary',"February","March","April","May","June","July","August","September","October"
,"November","December"];
console.log ('The months 5 and 11 are:');
console.log (chain[4]);
console.log (chain[10]);
/*
    b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log ('---) Exercise 3-b)');
var chain2 = ['Jannuary',"February","March","April","May","June","July","August","September","October"
,"November","December"];
chain2.sort();
console.log ('The 12 months, sorted alphabetically, would be as follows:')
console.log (chain2);
/*
    c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log ('---) Exercise 3-c)');
chain.unshift ('First');
chain.push ('Last');
console.log ('The original array with the additions will look like:');
console.log (chain);
/*
    d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log ('---) Exercise 3-d)');
chain.shift();
chain.pop();
console.log ('The array will look like :');
console.log (chain);
/*
    e) Invertir el orden del array (utilizar reverse).
*/
console.log ('---) Exercise 3-e)');
chain.reverse();
console.log ('The array, after using reverse, would look like this:');
console.log (chain);
/*
    f )Unir todos los elementos del array en un único string donde cada mes este separado por un
    guión - (utilizar join).
*/  
console.log ('---) Exercise 3-f)');
console.log (chain.join('-'));
/*
    g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log ('---) Exercise 3-g)');
chain.reverse();
var newChain = chain.slice(4,11);
console.log ('The new array would look like:')
console.log (newChain);



