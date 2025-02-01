// summerTime

function countdown() {
    const summerDate = new Date("Jun 1, 2025");
    const autumnDate = new Date("September 1, 2025")
    const springDate = new Date("March 1, 2025");
    const winterDate = new Date("December 1, 2025")
    const now = new Date();
    const diffSummer = summerDate - now;
    const diffAutumn = autumnDate - now;
    const diffSpring = springDate - now;
    const diffWinter = winterDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;
    
    //Вычисляем количество оставшихся дней

    const displayDaySummer = Math.floor(diffSummer/msInDay);
    document.querySelector('.days_summer').textContent = displayDaySummer;
    const displayDayAutumn = Math.floor(diffAutumn/msInDay);
    document.querySelector('.days_autumn').textContent = displayDayAutumn;
    const displayDaySpring = Math.floor(diffSpring/msInDay);
    document.querySelector('.days_spring').textContent = displayDaySpring;
    const displayDayWinter = Math.floor(diffWinter/msInDay);
    document.querySelector('.days_winter').textContent = displayDayWinter;

    //Вычисляем количество оставшихся часов

    const displayHourSummer = Math.floor((diffSummer%msInDay)/msInHour);
    document.querySelector('.hours_summer').textContent = displayHourSummer;

    const displayHourAutumn = Math.floor((diffAutumn%msInDay)/msInHour);
    document.querySelector('.hours_autumn').textContent = displayHourAutumn;

    const displayHourSpring = Math.floor((diffSpring%msInDay)/msInHour);
    document.querySelector('.hours_spring').textContent = displayHourSpring;

    const displayHourWinter = Math.floor((diffWinter%msInDay)/msInHour);
    document.querySelector('.hours_winter').textContent = displayHourWinter;

    //Вычисляем количество минут

    const displayMinuteSummer = Math.floor((diffSummer%msInHour)/msInMinute);
    document.querySelector('.minutes_summer').textContent = displayMinuteSummer;

    const displayMinuteAutumn = Math.floor((diffAutumn%msInHour)/msInMinute);
    document.querySelector('.minutes_autumn').textContent = displayMinuteAutumn;

    const displayMinuteSpring = Math.floor((diffSpring%msInHour)/msInMinute);
    document.querySelector('.minutes_spring').textContent = displayMinuteSpring;

    const displayMinuteWinter = Math.floor((diffWinter%msInHour)/msInMinute);
    document.querySelector('.minutes_winter').textContent = displayMinuteWinter;

    //Вычисляем количество секунд

    const displaySecondSummer = Math.floor((diffSummer%msInMinute)/msInSecond);
    document.querySelector('.seconds_summer').textContent = displaySecondSummer;

    const displaySecondAutumn = Math.floor((diffAutumn%msInMinute)/msInSecond);
    document.querySelector('.seconds_autumn').textContent = displaySecondAutumn;

    const displaySecondSpring = Math.floor((diffSpring%msInMinute)/msInSecond);
    document.querySelector('.seconds_spring').textContent = displaySecondSpring;

    const displaySecondWinter = Math.floor((diffWinter%msInMinute)/msInSecond);
    document.querySelector('.seconds_winter').textContent = displaySecondWinter;

    //Останавливаем время при 0

    if (diffSpring <= 0) {
        document.querySelector('.days_spring').textContent = 0;
        document.querySelector('.hours_spring').textContent = 0;
        document.querySelector('.minutes_spring').textContent = 0;
        document.querySelector('.seconds_spring').textContent = 0;

        springCome();
    }
    if (diffAutumn <= 0) {
        document.querySelector('.days_autumn').textContent = 0;
        document.querySelector('.hours_autumn').textContent = 0;
        document.querySelector('.minutes_autumn').textContent = 0;
        document.querySelector('.seconds_autumn').textContent = 0;

        autumnCome();
    }
    if (diffSummer <= 0) {
        document.querySelector('.days_summer').textContent = 0;
        document.querySelector('.hours_summer').textContent = 0;
        document.querySelector('.minutes_summer').textContent = 0;
        document.querySelector('.seconds_summer').textContent = 0;

        summerCome();
    }
    if (diffWinter <= 0) {
        document.querySelector('.days_winter').textContent = 0;
        document.querySelector('.hours_winter').textContent = 0;
        document.querySelector('.minutes_winter').textContent = 0;
        document.querySelector('.seconds_winter').textContent = 0;

        winterCome();
    }
}

let timerID = setInterval(countdown, 1000);

//Меняем заголовок, когда счётчик доходит до 0

function springCome() {
    const headingSpring = document.querySelector('.head_spring');
    headingSpring.textContent = "Spring is Coming!";
    headingSpring.classList.add('springCome');
}

function summerCome() {
    const headingSummer = document.querySelector('.head_summer');
    headingSummer.textContent = "Summer is Coming!";
    headingSummer.classList.add('summerCome');
}

function autumnCome() {
    const headingAutumn = document.querySelector('.head_autumn');
    headingAutumn.textContent = "Autumn is Coming!";
    headingAutumn.classList.add('autumnCome');
}

function winterCome() {
    const headingWinter = document.querySelector('.head_winter');
    headingWinter.textContent = "Winter is Coming!";
    headingWinter.classList.add('winterCome');
}

//Привязываем кнопки к музыке

function volumeAudioSpring() {    
    const audioSpring = document.querySelector('#springAudio');
    audioSpring.volume = 0.1;

    const volumeUpSpring = document.querySelector('#volumeUpSpring');
    const volumeDownSpring = document.querySelector('#volumeDownSpring');

    volumeUpSpring.addEventListener('click', function() {
        audioSpring.volume += 0.1;
    })
    volumeDownSpring.addEventListener('click', function() {
        audioSpring.volume -= 0.1;
    })
}
volumeAudioSpring();

function volumeAudioSummer() {    
    const audioSummer = document.querySelector('#summerAudio');
    audioSummer.volume = 0.1;

    const volumeUpSummer = document.querySelector('#volumeUpSummer');
    const volumeDownSummer = document.querySelector('#volumeDownSummer');

    volumeUpSummer.addEventListener('click', function() {
        audioSummer.volume += 0.1;
    })
    volumeDownSummer.addEventListener('click', function() {
        audioSummer.volume -= 0.1;
    })
}
volumeAudioSummer();

function volumeAudioAutumn() {    
    const audioAutumn = document.querySelector('#autumnAudio');
    audioAutumn.volume = 0.1;

    const volumeUpAutumn = document.querySelector('#volumeUpAutumn');
    const volumeDownAutumn = document.querySelector('#volumeDownAutumn');

    volumeUpAutumn.addEventListener('click', function() {
        audioAutumn.volume += 0.1;
    })
    volumeDownAutumn.addEventListener('click', function() {
        audioAutumn.volume -= 0.1;
    })
}
volumeAudioAutumn();

function volumeAudioWinter() {    
    const audioWinter = document.querySelector('#winterAudio');
    audioWinter.volume = 0.1;

    const volumeUpWinter = document.querySelector('#volumeUpWinter');
    const volumeDownWinter = document.querySelector('#volumeDownWinter');

    volumeUpWinter.addEventListener('click', function() {
        audioWinter.volume += 0.1;
    })
    volumeDownWinter.addEventListener('click', function() {
        audioWinter.volume -= 0.1;
    })
}
volumeAudioWinter();


const springButtonPlay = document.querySelector('#springButtonPlay');
const springButtonPause = document.querySelector('#springButtonPause');

    springButtonPlay.addEventListener('click', function() {
        document.querySelector('#springAudio').play();
    })
    springButtonPause.addEventListener('click', function() {
        document.querySelector('#springAudio').pause();
    })

const summerButtonPlay = document.querySelector('#summerButtonPlay');
const summerButtonPause = document.querySelector('#summerButtonPause');

    summerButtonPlay.addEventListener('click', function() {
        document.querySelector('#summerAudio').play();
    })
    summerButtonPause.addEventListener('click', function() {
        document.querySelector('#summerAudio').pause();
    })

const autumnButtonPlay = document.querySelector('#autumnButtonPlay');
const autumnButtonPause = document.querySelector('#autumnButtonPause');

    autumnButtonPlay.addEventListener('click', function() {
        document.querySelector('#autumnAudio').play();
    })
    autumnButtonPause.addEventListener('click', function() {
        document.querySelector('#autumnAudio').pause();
    })

const winterButtonPlay = document.querySelector('#winterButtonPlay');
const winterButtonPause = document.querySelector('#winterButtonPause');

    winterButtonPlay.addEventListener('click', function() {
        document.querySelector('#winterAudio').play();
    })
    winterButtonPause.addEventListener('click', function() {
        document.querySelector('#winterAudio').pause();
    })

// Делаем слайды

const items = document.querySelectorAll('section');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})