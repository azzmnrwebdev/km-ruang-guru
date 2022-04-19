// Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
let stopWatch = document.getElementById("stopwatch");
let startBtn = document.getElementsByClassName("btn-start")[0];
let stopBtn = document.getElementsByClassName("btn-stop")[0];
let resetBtn = document.getElementsByClassName("btn-reset")[0];

let hour = 0;
let min = 0;
let sec = 0;
let stopTimer = true;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  // TODO: answer here
  if (stopTimer) {
    stopTimer = false;
    runTime();
  }
}

function stop() {
  // TODO: answer here
  if (!stopTimer) {
    stopTimer = true;
  }
}

function reset() {
  // TODO: answer here
  hour = 0;
  min = 0;
  sec = 0;
  stopWatch.innerHTML = "00:00:00";
}

function runTime() {
  // TODO: answer here
  if (!stopTimer) {
    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) sec = `0${sec}`;
    if (min < 10 || min == 0) min = `0${min}`;
    if (hour < 10 || hour == 0) hour = `0${hour}`;
    stopWatch.innerHTML = `${hour}:${min}:${sec}`;
    setTimeout(runTime, 1000);
  }
}
