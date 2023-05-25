
const Lesson = new Date("May 26 , 2023 9:30").getTime();
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
            const divBody = document.querySelector("div.body");
            const headerTimer = document.querySelector("div.header-timer");
            headerTimer.innerHTML = "The lesson has begun!!";
            headerTimer.classList.add("fs-1" , "fw-bold");
            divBody.classList.add("d-none");
        }

       
}
   

