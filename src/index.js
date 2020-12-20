import './styles.css';

const refs = {
    $days: document.querySelector('.value[data-value="days"]'),
    $hours: document.querySelector('.value[data-value="hours"]'),
    $minutes: document.querySelector('.value[data-value="mins"]'),
    $seconds: document.querySelector('.value[data-value="secs"]')
};

// 'span [data-value="days"]'

const { $days, $hours, $minutes, $seconds } = refs;

const timer = {
    start() {
        const startTime = new Date('Jul 17, 2021');
        
        setInterval(() => {
            const currentTime = Date.now();
            // console.log('currentTime', currentTime);
            // console.log('startTime', startTime);
            const deltaTime = startTime - currentTime;
            // console.log(deltaTime);

            updateClock(deltaTime);
        }, 1000);
    }
};

timer.start();

function updateClock(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    // console.log(`${days}:${hours}:${mins}:${secs}`);

    $days.textContent = `${ days }`;
    $hours.textContent = `${ hours }`;
    $minutes.textContent = `${ mins }`;
    $seconds.textContent = `${ secs }`;
};

function pad(value) {
    return String(value).padStart(2,'0');
};