const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const time3 = document.querySelector('.time3');

const  saleText = document.querySelector('.saleText') 


const time4 = document.querySelector('.time4');

let seconds = 60; 
let min = 60 ;
let hours = 24 ;

let day = 30 ; 

function timer() {
    if (seconds > 0) {
        seconds--; 
        time4.textContent = seconds; 
    } else if (min > 0) {
        min--; 
        seconds = 60; 
        time3.textContent = min; 
    } 
    else if(hours > 0){
        hours--;

      min = 60 ;
      time2.textContent = hours

    }
    else if(day> 0){
        day--;
        hours = 60 ;
        time1.textContent = day

    }
    else{
     saleText.textContent = 'Время закончилось вы не успели'
    }
}

const interval = setInterval(timer, 1000);