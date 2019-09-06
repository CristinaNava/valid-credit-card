'use strict'


function validadorTarjeta(){
  var Tarjeta = document.getElementById("numTarjeta").value;
  if (Tarjeta.length == 14 && Tarjeta.startsWith("3")) {
    alert("La tarjeta es AMEX");
  } else if (Tarjeta.length == 16 ) {
    alert("La tarjeta es MC");
  }else if (Tarjeta.lenght >16 && Tarjeta.lengt <=19) {
    alert("La tarjeta es visa");
  }
}
