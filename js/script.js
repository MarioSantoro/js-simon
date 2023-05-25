
const Lesson = new Date("May 25, 2023 16:06").getTime();
let finishCounter = setInterval(CountDown , 1000);

function CountDown(){
    let DateNow = new Date().getTime();
        let distanceOflesson = Lesson - DateNow;
        if(distanceOflesson >= 0){
             //Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distanceOflesson / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceOflesson % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceOflesson % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceOflesson % (1000 * 60)) / 1000);
    
        const pDay = document.getElementById("day");
        pDay.innerHTML = days;
    
        const pHours = document.getElementById("hours");
        pHours.innerHTML = hours;
    
        const pMinutes = document.getElementById("minutes");
        pMinutes.innerHTML = minutes;
    
        const pSecond = document.getElementById("second");
        pSecond.innerHTML = seconds;
        
        }else{
            clearInterval(finishCounter);
            const divTimer  = document.getElementById("timer");
            const headerTimer = document.querySelector("div.header-timer");
            headerTimer.innerHTML = "The lesson has begun";
        }

       
}
   

