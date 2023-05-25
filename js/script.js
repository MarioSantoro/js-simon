const Lesson = new Date("May 26, 2023 9:30").getTime();
console.log(Lesson);

let finishCounter =setInterval(CountDown , 1000);

function CountDown(){
    let DateNow = new Date().getTime();
    let distanceOflesson = Lesson - DateNow;

    //Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distanceOflesson / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distanceOflesson % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distanceOflesson % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceOflesson % (1000 * 60)) / 1000);

    const time = document.getElementById("time");
    time.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
