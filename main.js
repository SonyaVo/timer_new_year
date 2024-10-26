

// делаем расчеты

const current_year = new Date().getFullYear();
const next_year = new Date(`January 01 ${current_year + 1} 00:00:00`);

//определяем действующие элементы

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function update() {
    const current_time = new Date();
    const diff = next_year - current_time;


    const days_left = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours_left = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes_left = Math.floor(diff / 1000 / 60) % 60;
    const seconds_left = Math.floor(diff / 1000) % 60;

    // console.log(days_left,hours_left, minutes_left, seconds_left)

    days.innerHTML = days_left < 10 ? '0' + days_left : days_left;
    hours.innerHTML = hours_left < 10 ? '0' + hours_left : hours_left;
    minutes.innerHTML = minutes_left < 10 ? '0' + minutes_left : minutes_left;
    seconds.innerHTML = seconds_left < 10 ? '0' + seconds_left : seconds_left;

}

update();
setInterval(update, 1000);
