let flipped=0;

let card=document.querySelectorAll('.flip-card-inner');
console.log('card');
for (let index = 0; index < card.length; index++) {
    card[index].addEventListener('click',Flip);    
}

function Flip(){
    this.classList.add('flip')
    flipped+=1;
    if(flipped==2){
        flipped=0;
        ReFlip();
        for (let index = 0; index < card.length; index++) {
            card[index].removeEventListener('click',Flip);    
        }
    }
}
function Control(){
    let remove=document.querySelectorAll('.flip');
    for (let index = 0; index < remove.length; index++) {
        remove[index].classList.remove('flip');  
    }
    for (let index = 0; index < card.length; index++) {
        card[index].addEventListener('click',Flip);    
    }
}
function ReFlip(){
    setTimeout(Control,1500);
}

console.log("Prova creazione fork Alessandro");