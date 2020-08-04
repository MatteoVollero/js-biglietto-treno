/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
*/
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
