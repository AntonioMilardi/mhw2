/* TODO: inserite il codice JavaScript necessario a completare il MHW! */


const Personalità = {};  
const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes) {        
    box.addEventListener('click', Cliccato);
}

function Cliccato(event){
    
    const box = event.currentTarget;
    
 box.querySelector('.checkbox').src = "images/checked.png";
 box.classList.add('selezionato'); 
 box.classList.remove('Opacità');  

 const rispostaScelta = box.dataset.choiceId;
 const risposte = box.parentNode.querySelectorAll('div');
 for (const risposta of risposte) {
     if(risposta.dataset.choiceId !== rispostaScelta){                          //rendo opache le risposte non selezionate
         risposta.classList.add('Opacità'); 
        risposta.querySelector('.checkbox').src = "images/unchecked.png";
         risposta.classList.remove('selezionato'); 
     }
 }
     RicercaRisultato(box); 
}

function RicercaRisultato(box) {

    Personalità[box.dataset.questionId] = box.dataset.choiceId; 

    if(Personalità.one && Personalità.two && Personalità.three){ 
        for (const box of boxes) {
            box.removeEventListener('click',Cliccato);  //blocco l'utente dal cambiare risposta nel momento in cui ho selezionato tre risposte
        }   
        
         const select = Personalità.one;   
    if( Personalità.three === Personalità.two) 
      select.Personalità = Personalità.two;            
 
    const MostraPersonalità = document.querySelector('#risultato');
    MostraPersonalità.querySelector('h1').textContent = RESULTS_MAP[select].title;
    MostraPersonalità.querySelector('p').textContent = RESULTS_MAP[select].contents;
    MostraPersonalità.classList.remove('hidden');
    const pulsanteReset = document.querySelector('#button'); //preparo il pulsante di reset del quiz

    pulsanteReset.addEventListener('click',Ricomincia);
       }
    }
  
function Ricomincia(){
    for (const scorri in Personalità) {  
        delete Personalità[scorri];  
    }
    const rimuovi= document.querySelector('#risultato');
 rimuovi.classList.add('hidden');  //con la classe hidden nascondo il risultato
    for (const box of boxes) {
        box.classList.remove('Opacità'); 
        box.classList.remove('selezionato'); 
        box.addEventListener('click', Cliccato);
        box.querySelector('.checkbox').src = "images/unchecked.png";
    }
}

