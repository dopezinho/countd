const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')

const launch = "18 dec 2022"

function countD() {
    const launchD = new Date(launch)
    const tuday = new Date()

    const totSeseg = (launchD - tuday)/1000;

    const fiDays = Math.floor(totSeseg / 60 / 60 / 24);
    const fiHours = Math.floor(totSeseg / 60 / 60) % 24;
    const fiMinutes = Math.floor(totSeseg / 60) % 60;
    const finSeconds = Math.floor(totSeseg) % 60;

    day.innerHTML = timeFormat(fiDays)
    hour.innerHTML = timeFormat(fiHours)
    minute.innerHTML = timeFormat(fiMinutes)
    second.innerHTML = timeFormat(finSeconds)
}

function timeFormat( tempo ) {
    return tempo < 10? `0${tempo}` : tempo;
}

countD();
setInterval(countD, 1000)