

let numeriCasualiContainer = document.querySelector('div.numericasuali');

let numeriCasuali = [];

    for (index= 0; index < 5 ; index++){
            const numbers = Math.floor(Math.random() * 100) + 1;  
            numeriCasuali.push(numbers);
        }

    numeriCasuali.forEach(function(numero) {
        const numeroElemento = document.createElement('div'); //creiamo un div 
        numeroElemento.textContent = numero; // aggiugniamo al div il suo contenuto 
        numeriCasualiContainer.appendChild(numeroElemento);//e al div container appendiamo numero i div creati
    });
    





