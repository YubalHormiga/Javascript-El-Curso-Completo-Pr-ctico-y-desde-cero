/*
	Los arreglos en javascript en realidad son objetos. 
	Esto significa que pueden contener propiedades y métodos.
	Vamos a ver algunas de las propiedades y métodos mas importantes:
*/
const colores = ['Rojo', 'Verde', 'Azul'];

/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
// console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = colores.toString();

/*
	📌 .join()
	Nos permite transformar un arreglop a una cadena de texto y separar cada elemento. 
*/
// console.log(colores.join('|'));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

// Tambien puede ordenar numeros.
const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Amarillo');

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colores.pop();

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(dias[0]); // Lunes
const diaEliminado = dias.shift(); // Lunes

console.log(dias);
console.log(dias[0]); //Martes

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Carlos');
console.log(dias);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Cuantos elementos eliminar desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(1, 2, 'Rafael', 'Roberto');

// Tambien podemos usar splice para eliminar elementos sin insertar ninguno.
// amigos.splice(1, 1);

console.log(amigos);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
console.log(nombres.indexOf('Rafael')); // 1
console.log(nombres.indexOf('Sergio')); // -1

/* 
	📌 .lastIndexOf() 
	Obtenemos el ultimo index de un elemento.
*/
console.log(nombres.lastIndexOf('Rafael')); // 4

/* 	
	📌 .foreach()
	Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((nombre, index) => {
	console.log(`Hola ${nombre} (index: ${index})`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
// Ejemplo donde obtenemos el primer nombre que empiece por una letra.
const letra = 'E';
const resultado = nombres.find((nombre) => {
	// Por cada elemento del arreglo ejecutamos la funcion
	// Si la primera letra de un dia empieza por A lo devolvemos.

	if (nombre[0] === letra) {
		return nombre;
	}
});
console.log(resultado);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
// Ejemplo: Crear arreglo que contiene los nombres en mayusculas.
const nombresMayusculas = nombres.map((nombre) => {
	return nombre.toUpperCase();
});

// Forma corta:
//const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una funcion por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
// Ejemplo: Crear un arreglo que contenga los nombres que tengan 4 letras.
const nombres4Letras = nombres.filter((nombre) => {
	if (nombre.length === 4) {
		return nombre;
	}
});
console.log(nombres4Letras);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
console.log(nombres.includes('Julio')); // false
console.log(nombres.includes('Carlos')); // true

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
// Ejemplo: Comprobamos que todos los nombres sean cadenas de texto.
const nombresValidos = nombres.every((nombre) => {
	if (typeof nombre === 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿Todos los nombres son validos? ' + nombresValidos); // True

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición. 
*/
const arregloInvalido = nombres.some((nombre) => {
	if (typeof nombre !== 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿El arreglo es invalido? ' + arregloInvalido);
// true si hay algun valor invalido
// false si no hay algun valor invalido