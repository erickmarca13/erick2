//Ejecicio 1 
function Prueba(params) {
    var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log (meses[i]);
        
    }
}


// Ejecicio 2 
function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2,];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof(valores[i]) == "string") {
            if (valores[i].length > valor.length) {
            valor = valores[i];
        }
    }
}

    console.log("el mayor es "+valor);
}

//Ejercicio 3 

//Ejercicio 4 

//Ejercicio 5 
function Ejercicio5() { 
    var numero = 5; 
    var r = 1;
    for(let i = numero; i>0; i--){
    r *= i;
}    

    console.log(r);
}