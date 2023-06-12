//Ejecicio 1 
function Prueba(params) {
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);

    }
}


// Ejecicio 2 
function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios", 2,];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "string") {
            if (valores[i].length > valor.length) {
                valor = valores[i];
            }
        }
    }

    console.log("el mayor es " + valor);
}

//Ejercicio 3 

//Ejercicio 4 

//Ejercicio 5 
function Ejercicio5() {
    var numero = 5; // Numero del que queremos calcular el factorial
    let r = 1;
    for (let i = numero; i > 0; i--) {
        r *= i;
    }

    console.log(r);
}
//Ejercicio 7
function Ejercicio7() {
    const texto = 'HOLA';

if (texto === texto.toUpperCase()) {
  console.log('El texto está en mayúsculas');
} else if (texto === texto.toLowerCase()) {
  console.log('El texto está en minúsculas');
} else {
  console.log('El texto tiene una combinación de mayúsculas y minúsculas');
}
}

// ejercicio 8 
function esPalindromo(palabra) {
    
   palabra = palabra.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
   var invertida = palabra.split('').reverse().join('');
   
  
   return palabra === invertida;
}

console.log(esPalindromo("anita lava la tina"));
console.log(esPalindromo("La ruta nos aportó otro paso natural"));
console.log(esPalindromo("¡Hola mundo!"));
console.log(esPalindromo("La ruta nos aporto otro paso natural"));