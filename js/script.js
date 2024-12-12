function updateCountdown() {
    const weddingDate = new Date('2024-12-15T19:00:00');
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

function handleSubmit(event) {
    event.preventDefault();
    alert('¡Gracias por confirmar tu asistencia!');
    event.target.reset();
    return false;
}

setInterval(updateCountdown, 1000);
updateCountdown();