
// Chiedo i km da percorrere
var kilometriDaPercorrere = parseInt(prompt("Quanti km bisogna percorrere?"));
document.getElementById('km').innerHTML = kilometriDaPercorrere;

// Chiedo Eta
var eta = parseInt(prompt("Inserire età"));
document.getElementById('eta').innerHTML = eta;


//Salvo il costo di un kilometro
var costoPerKilometro = 0.21;


// variabile per il Prezzo
var prezzoFinale = 0;


// Sconto per i minorenni
if(eta < 18){
  prezzoFinale = costoPerKilometro * kilometriDaPercorrere;

  prezzoFinale = prezzoFinale - (prezzoFinale*0.2);
}else if(eta > 65){
  prezzoFinale = costoPerKilometro * kilometriDaPercorrere;

  prezzoFinale = prezzoFinale - (prezzoFinale*0.4);
} else {
  prezzoFinale = costoPerKilometro * kilometriDaPercorrere;
}

document.getElementById('prezzo').innerHTML = prezzoFinale;
