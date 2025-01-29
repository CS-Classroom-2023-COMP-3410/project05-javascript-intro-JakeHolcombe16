// JavaScript for the customizable digital clock
const clockElement = document.getElementById('clock');
const toggleFormatButton = document.getElementById('toggle-format');
const colorInput = document.getElementById('color-input');
const fontSizeInput = document.getElementById('font-size-input');
const alarmInput = document.getElementById('alarm-input');
const setAlarmButton = document.getElementById('set-alarm');

let is24HourFormat = JSON.parse(localStorage.getItem('is24HourFormat')) || false;
let clockColor = localStorage.getItem('clockColor') || '#000000';
let clockFontSize = localStorage.getItem('clockFontSize') || '24px';
let alarms = JSON.parse(localStorage.getItem('alarms')) || [];

// Apply user preferences
document.body.style.setProperty('--clock-color', clockColor);
clockElement.style.fontSize = clockFontSize;

function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (!is24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${period}`;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}

function updateClock() {
    const now = new Date();
    clockElement.textContent = formatTime(now);
    checkAlarms(now);
}

function checkAlarms(currentTime) {
    const currentFormatted = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
    if (alarms.includes(currentFormatted)) {
        alert(`Alarm: ${currentFormatted}`);
        alarms = alarms.filter(alarm => alarm !== currentFormatted);
        localStorage.setItem('alarms', JSON.stringify(alarms));
    }
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem('is24HourFormat', JSON.stringify(is24HourFormat));
    updateClock();
}

function changeClockColor() {
    clockColor = colorInput.value;
    document.body.style.setProperty('--clock-color', clockColor);
    localStorage.setItem('clockColor', clockColor);
}

function changeFontSize() {
    clockFontSize = fontSizeInput.value + 'px';
    clockElement.style.fontSize = clockFontSize;
    localStorage.setItem('clockFontSize', clockFontSize);
}

function setAlarm() {
    const alarmTime = alarmInput.value;
    if (alarmTime && !alarms.includes(alarmTime)) {
        alarms.push(alarmTime);
        localStorage.setItem('alarms', JSON.stringify(alarms));
        alert(`Alarm set for: ${alarmTime}`);
    }
}

// Event listeners
toggleFormatButton.addEventListener('click', toggleFormat);
colorInput.addEventListener('input', changeClockColor);
fontSizeInput.addEventListener('input', changeFontSize);
setAlarmButton.addEventListener('click', setAlarm);

// Initial clock update
setInterval(updateClock, 1000);
updateClock();