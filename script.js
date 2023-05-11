function buscar_países(){//para invocar funciones le agrego un paréntesis al final
    let problemas= document.getElementById("tiste").value; 
console.log(problemas,"esto es un problema")
//con let declaro una veriable
  // declaro una variable llamada input.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="searchbar"
  problemas = problemas.toLowerCase();
  // con la funcion toLowerCase le digo que me busque tanto si está en mayúscula o minúscula
  let x = document.getElementsByClassName("card");
  // declaro la variable x y le asigno lo que me trae la clase "product"
  console.log("longitud", x.length);
  for (i = 0; i < x.length; i++) {
    // con el ciclo for, va a recorrer todos los elementos de x hasta que llegue a la longitud de x. osea hasta que no haya mas elementos para recorrer
    if (!x[i].innerHTML.toLowerCase().includes(problemas)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "table";
    }
  }  

}
// declaro una variable llamada problemas.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="tiste"

