console.log('\n--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function sum(num1, num2) {
    return num1 + num2;
}

var resultSum = sum(6, 9);

console.log(resultSum);


// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('\n-Exercise 6.b:');

function sum2(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert("One of the parameters has an error!");
        return NaN;
    }
    return num1 + num2;
}

console.log(sum2(5, '6'));


// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('\n-Exercise 6.c:');

function validateInteger(num) {
    return Number.isInteger(num);
}

console.log(validateInteger(5));


// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('\n-Exercise 6.d:');

function sum3(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert("One of the parameters has an error!");
        return NaN;
    }

    if (!validateInteger(num1)) {
        alert('The first number is not an integer!');
        num1 = Math.round(num1);
    }

    if (!validateInteger(num2)) {
        alert('The second number is not an integer!');
        num2 = Math.round(num2);
    }

    return num1 + num2;
}

console.log(sum3(5, 6.4));


// e. Convertir la validación del ejercicio 6d) (ejercicio 6b)) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

// At first it said 6b and then it was changed to 6d, so I did both.

console.log('\n-Exercise 6.e:');

function isNumber(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert("One of the parameters has an error!");
        return false;
    }
    return true;
}

function isInteger(num) {
    if (!validateInteger(num)) {
        alert('One of the numbers is not an integer!');
        num = Math.round(num);
    }
    return num;
}

function sum4(num1, num2) {
    if (!isNumber(num1, num2)) {
        return NaN;
    }

    num1 = isInteger(num1);
    
    num2 = isInteger(num2);

    return num1 + num2;
}

console.log(sum4(5, 7));

console.log(sum4(5, '7'));

console.log(sum4(5, 2.6));