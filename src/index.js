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
});

mediumBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
    time=1500;
    timerContent.innerHTML = "25:00"
});

longBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
    time=2700;
    timerContent.innerHTML = "45:00"
});

startBtn.addEventListener("click", ()=>{
    if (timer) {
        return;
    }
    timer = setInterval(()=>{
        time -= 1;
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        timerContent.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
});