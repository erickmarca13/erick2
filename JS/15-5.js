let= num =545
function ejemplo(params) {
   let inp = document.querySelector("#entrada");
   let p = document.querySelector("#salida")
   let diving = document.querySelector("#img")
   diving.innerHTML = '<img src ="../img/Gato.jpeg" alt="error"/>';
   let valor = inp.value;
   p.innerText = valor; 
   console.log(p.value);
   console.log(valor);
   console.dir(inp);
   console.log(num)
}