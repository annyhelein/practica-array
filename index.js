let nada= [];

let elementos = [1, 2, 3, 4, 5];

let edtd = [1, "dos", true, { datos: "valor" }, [6, 7, 8]];

let constructor = new Array(1, 2, 3, 4, 5);

let secuenciaN = Array.from({ length: 5 }, (_, index) => index + 1);

let valor = 0; // El valor que se repetirá
let longitud = 5; // La longitud del array que se va a crear
let array = new Array(longitud).fill(valor);

let cadena = "Hola,  espero que te encuentres bien";
let tex = string.split(", ");

let nada1 = [];
let elementos2 = [1, 2, 3, 4, 5];

let combinedArray = [...nada1, ...elementos2];

let valU = [16, 20, 25, 28];
let unic = [...new Set(array)];

function generarValores(s) {
    let val = [];
    for (let i = 0; i < s; i++) {

array.push(i * 2); 
}
return val;
}

let cantidadValores = 5;
let arrayGenerado = generarValores(cantidadValores);
console.log(arrayGenerado); 

//metodos basicos de array//
let miArray = [1, 2, 3, 4, 5];
let longitud1 = miArray.length;
console.log("La longitud del array es: " + longitud1);

let crelefiar = [1, 2, 3, 4, 5];
console.log("Array original:", miArray);

// Agregar un elemento al final del array
crelefiar.push(6);
console.log("Array después de agregar un elemento:", miArray);

// Agregar varios elementos al final del array
crelefiar.push(7, 8, 9);
console.log("Array después de agregar varios elementos:", crelefiar);

let elimina = [1, 2, 3, 4, 5];
console.log("Array original:", elimina);

// Eliminar el último elemento del array
let ultimoElementoEliminado = elimina.pop();
console.log("Array después de eliminar el último elemento:", elimina);
console.log("Último elemento eliminado:", ultimoElementoEliminado);

let agrega = [1, 2, 3, 4, 5];
console.log("Array original:", agrega);

agrega.unshift(0);
console.log("Array después de agregar un elemento al principio:", agrega);

agrega.unshift(-2, -1);
console.log("Array después de agregar varios elementos al principio:", agrega);