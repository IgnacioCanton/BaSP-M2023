// 6 - functions

/*
    a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador.
*/
console.log ('---) Exercise 6-a)');
function sum (a,b)
{
    return a+b;
}
var x = 25;
var y = 21;
var resultado=sum(x,y);
console.log ('La suma de', x,'y', y,'es:',resultado);
/*
    b) Copiar la función suma anterior y agregarle una validación para controlar si alguno de los 
    parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los 
    parámetros tiene error y retornar el valor NaN como resultado.
*/
console.log ('---) Exercise 6-b)');
function newSum (a,b)
{
    if (isNaN(a) || isNaN(b))
    {
        alert ('At least one of the parameters is not a number');
        return NaN;
    }
    else
    {
        return a+b;
    }
}
var n = 21;
var t = 'x';
var resultado=newSum(n,t);
/*
    c) Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero 
    si es un número entero.
*/
console.log ('---) Exercise 6-c)');
function validateInteger (num)
{
    var res = num % 1 === 0;
    return res;
}
var number = 15;
result = validateInteger (number);
console.log (result);
/*
    d) Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del 
    ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un 
    alert con el error y retornar el número convertido a entero (redondeado).
*/
console.log ('---) Exercise 6-d)');
function lastSum (a,b)
{
    if (isNaN(a) || isNaN(b))
    {
        alert ('At least one of the parameters is not a number');
        return NaN;
    }
    else
    {
        if (validateInteger(a)!=true) 
        {
            alert ('error ' + Math.round(a));
        }
        if (validateInteger(b)!=true)
        {
            alert ('error ' + Math.round(b));
        }
        return Math.round(a) + Math.round(b);
    }
}

var s = 10.25;
var b = 12.23;
resu = lastSum(s,b);
console.log ('The result is:',resu);
/* 
    e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de 
    una nueva función probando que todo siga funcionando igual que en el apartado anterior.
*/
console.log ('---) Exercise 6-e)');
function intVerification (x,y)
{
    if (validateInteger(x)!=true) 
    {
        alert ('error ' + x.toFixed(0));
    }
    if (validateInteger(y)!=true)
    {
        alert ('error ' + y.toFixed(0));
    }
    return Math.round(x) + Math.round(y);
}
function lastSum2 (a,b)
{
    if (isNaN(a) || isNaN(b))
    {
        alert ('At least one of the parameters is not a number');
        return NaN;
    }
    else
    {   
        var answer=intVerification(a,b)
        return answer;
    }
}
var l = 10.25;
var w = 12.23;
var output = lastSum2 (l,w);
console.log ('The result is:', output);