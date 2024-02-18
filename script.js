let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count = count + 1;
    }

    if (count == 100) {
        sec = sec + 1;
        count = 0;
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }
    if (min == 60) {
        hr = hr + 1;
        sec = 0;
        min = 0;
    }

    let hrstring = hr;
    let minstring = min;
    let secstring = sec;
    let countstring = count;

    if(hrstring<10){
        hrstring = "0"+hrstring;
    }
    if(minstring<10){
        minstring = "0"+minstring;
    }
    if(secstring<10){
        secstring = "0"+secstring;
    }
    if(countstring<10){
        countstring = "0"+countstring;
    }


    document.getElementById("count").innerHTML = countstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("hr").innerHTML = hrstring;

    setTimeout(stopwatch, 10);
}
