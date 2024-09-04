const shortBtn = document.querySelector(".btn.one");
const mediumBtn = document.querySelector(".btn.two");
const longBtn = document.querySelector(".btn.three");
const startBtn = document.querySelector(".start-btn");
const timerContent = document.querySelector(".timer");

let timer;
let time = 1500;

shortBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
    time=600;
    timerContent.innerHTML = "10:00"
    startBtn.innerHTML = "START";
});

mediumBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
    time=1500;
    timerContent.innerHTML = "25:00"
    startBtn.innerHTML = "START";
});

longBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
    time=2700;
    timerContent.innerHTML = "45:00"
    startBtn.innerHTML = "START";
});

startBtn.addEventListener("click", ()=>{
    if (timer) {
        clearInterval(timer);
        timer = null;
        startBtn.innerHTML = "START";
        return
    }
    timer = setInterval(()=>{
        time -= 1;
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        timerContent.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
    startBtn.innerHTML = "STOP"
});