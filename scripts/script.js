function buscar_países(){//para invocar funciones le agrego un paréntesis al final
    let search= document.getElementById("buscador").value; 
console.log(search,"esto es un problema")
//con let declaro una veriable
  // declaro una variable llamada input.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="searchbar"
  search = search.toLowerCase();
  // con la funcion toLowerCase le digo que me busque tanto si está en mayúscula o minúscula
  let paises = document.getElementsByClassName("card");
let paisesEncontrados = false
  console.log()
  // declaro la variable paises y le asigno lo que me trae la clase "product"
  console.log("longitud", paises.length);
  for (let i = 0; i < paises.length; i++) {
    // con el ciclo for, va a recorrer todos los elementos de paises hasta que llegue a la longitud de paises. osea hasta que no haya mas elementos para recorrer
    let card = paises[i].innerHTML.toLowerCase();
    if (card.includes(search)) {

      paises[i].style.display = "table";
      paisesEncontrados = true
    } else {
      paises[i].style.display = "none";
      
    }
  }  

  let alerta = document.getElementById("message");
  if (!productFound) {
    alerta.style.display = "block";
  } else {
    alerta.style.display = "none";
  }

}
// declaro una variable llamada search.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="tiste"

 
