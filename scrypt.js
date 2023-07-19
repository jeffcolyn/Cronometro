
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cronômetro;

document.form_main.start.onclick = () => iniciarCronometro();
document.form_main.pause.onclick = () => pararCronometro();
document.form_main.reset.onclick = () => reiniciarCronometro();

function iniciarCronometro() {

    cronômetro = setInterval(() => { timer(); }, 10);
}

function pararCronometro() {
    clearInterval(cronômetro);
}

function reiniciarCronometro() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

