function updateClock() {
    const now = new Date();
    document.querySelector('.hours').textContent = String(now.getHours()).padStart(2, '0');
    document.querySelector('.minutes').textContent = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.seconds').textContent = String(now.getSeconds()).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock();
