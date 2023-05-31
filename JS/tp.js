function Prueba(params) {
    var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log (meses[i]);
        
    }
}
function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
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
