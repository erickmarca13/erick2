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
function Ejercicio3() {

    var numero1 = 5;
    var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
numero1 = numero1 + 1;
if(numero2 > numero1) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}

//Ejercicio 4 

//Ejercicio 5 
<<<<<<< HEAD
function Ejercicio5() { 
    var numero = 5; 
    var r = 1;
    for(let i = numero; i>0; i--){
    r *= i;
}    
=======
function Ejercicio5() {
    var numero = 5; // Numero del que queremos calcular el factorial
    let r = 1;
    for (let i = numero; i > 0; i--) {
        r *= i;
    }
>>>>>>> 264b803ad3fddaf5dc1e321001c0f57a5d8f67e6

    console.log(r);
}
//Ejercicio 6
function ejercicio6(){
    var numero = document.querySelector("#numero").value;
        if (numero % 2 == 0){
            console.log ("El número es par.");
        } else{
            console.log ("El número es impar.");
       }
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
//9
function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;   
}

Persona.prototype.obtDetalles = function() {
    console.log("nombre: " + this.nombre);
    console.log("edad: " + this.edad);
    console.log("genero: " + this.genero);
}

function Estudiante(nombre, edad, genero, curso, grupo){
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function(){
    console.log("el alumno " + this.nombre + " está registrado en el curso " + this.curso + " del grupo " + this.grupo);
}

function Profesor(nombre, edad, genero, asignatura, nivel){
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Profesor.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function(){
    console.log("el profesor " + this.nombre + " tiene la asignatura " + this.asignatura + " del nivel " + this.nivel);
}
//10 