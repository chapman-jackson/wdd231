const dynamicWelcome = document.querySelector('#welcome-message');

let currentTime = new Date();
let storedTime = localStorage.getItem('pageOpenTime');

if (storedTime) {
    storedTime = new Date(storedTime);
    const timeDifference = currentTime - storedTime;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 24 * 60 * 60 * 1000) {
        dynamicWelcome.textContent = 'Back so soon? Awesome!';
    } else {
        dynamicWelcome.textContent = `You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
        localStorage.setItem('pageOpenTime', currentTime);
    }
} else {
    localStorage.setItem('pageOpenTime', currentTime);
    dynamicWelcome.textContent = 'Welcome! Let us know if you have any questions.';
}
