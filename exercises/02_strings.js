console.log('\n--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var sentence1 = 'This is a long string';

console.log(sentence1);

sentence1 = sentence1.toUpperCase();

console.log(sentence1);


// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.b:');

var sentence2 = 'Another long string';

var sentence2Substring = sentence2.substring(0,5);

console.log('"' + sentence2Substring + '" are the first 5 characters of "' + sentence2 + '"');


// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n-Exercise 2.c:');

var sentence3 = 'The third string';

var sentence3Substring = sentence3.substring(sentence3.length - 3);

console.log('"' + sentence3Substring + '" are the last 3 characters of "' + sentence3 + '"');


// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('\n-Exercise 2.d:');

var sentence4 = 'this STRING has upperCase aNd LowercaSe';

console.log(sentence4);

var sentence4Capitalize = sentence4.substring(0,1).toUpperCase() + sentence4.substring(1).toLowerCase();

console.log(sentence4Capitalize);


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n-Exercise 2.e:');

var sentence5 = 'This string has blank spaces';

console.log(sentence5);

var firstBlankSpace = sentence5.indexOf(' ')

console.log('The first blank space has index: ' + firstBlankSpace);


// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('\n-Exercise 2.f:');

var sentence6 = 'final string';

console.log(sentence6);

sentence6 = sentence6.toLowerCase();

var blankSpace = sentence6.indexOf(' ') + 1;

var sentence6TitleCase = sentence6.substring(0,1).toUpperCase() + sentence6.substring(1,blankSpace) + sentence6.substring(blankSpace,blankSpace+1).toUpperCase() + sentence6.substring(blankSpace+1);

console.log(sentence6TitleCase);