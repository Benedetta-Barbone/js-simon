let numeriCasualiContainer = document.querySelector('div.numericasuali');

let numeriCasuali = [];
generaNumeriCasuali(numeriCasualiContainer);

function generaNumeriCasuali (){
    for (index= 0; index < 5 ; index++){
            const numbers = Math.floor(Math.random() * 100) + 1;  
            numeriCasuali.push(numbers);
        }
    
    numeriCasuali.forEach(function(numero) {
        const numeroElemento = document.createElement('div'); //creiamo un div 
        numeroElemento.textContent = numero; // aggiugniamo al div il suo contenuto 
        numeriCasualiContainer.appendChild(numeroElemento);//e al div container appendiamo numero i div creati
    });
    
    setTimeout(function() {
    numeriCasualiContainer.innerHTML = ''; //svutiamo il container dopo 30 secondi
    chiediNumeri(numeriCasuali); // Chiedere i numeri all'utente
    }, 30000);
}
   

    function chiediNumeri(numeriOriginali) {
        const numeriInseriti = []; // creiamo un array dove inseriamo i numeri che digita l'utente
        for (let i = 0; i < 5; i++) {
            const numero = parseInt(prompt('Inserisci un numero dei 5 che ricordi'), 10);
            numeriInseriti.push(numero);
        }
        const numeriIndovinati = numeriInseriti.filter(numero => numeriOriginali.includes(numero));
        
        alert(`Hai indovinato ${numeriIndovinati.length} numeri su 5.`);
    }    
