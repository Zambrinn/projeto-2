"use strict";

let second = 0;
let minute = 0;
let hour = 0;
let cron

function start() {
    cron = setInterval(function(){
    timer()    
    }, 1000);
}

function pause () {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron);
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("counter").innerText = "00:00:00"
}


function timer() {
    second++;
    if ( second === 60 ) {
        second = 0
        minute ++
        if ( minute === 60 ) {
            minute = 0
            hour++
        }
    }
    let format = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);

    document.getElementById("counter").innerText = format;
}
