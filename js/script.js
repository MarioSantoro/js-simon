const Lesson = new Date("May 26, 2023 9:30").getTime();
console.log(Lesson);



function CountDown(){
    let DateNow = new Date().getTime();
    let distanceOflesson = Lesson - DateNow;
    console.log(distanceOflesson);
}
