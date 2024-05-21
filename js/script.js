//-creare un div in html         OK
//    -riportarlo in js             ok
//    -dare a questa variabile una funzione che generi 5 numeri casuali 
//    -quindi creare la funzione        ok  
//        -a questa funzione aggiugere un timer di 30 secondi tramite setInterval
//            -allo scadere dei 30 secondi si crea un ciclo dove viene chiesto per 5 volte di inserire i numeri visti in           precedenza.


const numeriCasuali = document.querySelector('div.numericasuali');

function generaNumeriRandom(){
    for (index= 0; index < 5 ; index++){
        const numRandom = Math.floor(Math.random() * max);
    }
}



