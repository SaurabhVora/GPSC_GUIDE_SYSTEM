function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Countdown timer to June 7, 2026
function updateCountdown() {
    const examDate = new Date('2026-06-07T09:00:00');
    const now = new Date();
    const diff = examDate - now;

    if (diff <= 0) {
        document.getElementById('cd-days').textContent = '0';
        document.getElementById('cd-hrs').textContent = '0';
        document.getElementById('cd-min').textContent = '0';
        if (document.getElementById('cd-sec')) {
            document.getElementById('cd-sec').textContent = '0';
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hrs').textContent = hrs;
    document.getElementById('cd-min').textContent = min;
    if (document.getElementById('cd-sec')) {
        document.getElementById('cd-sec').textContent = sec;
    }
}

function highlightToday() {
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentDate = today.getDate();
    // E.g., "April 23"
    const dateStr = `${currentMonth} ${currentDate}`;

    document.querySelectorAll('.day-card').forEach(card => {
        const dateElement = card.querySelector('.day-date');
        if (dateElement && dateElement.textContent.includes(dateStr)) {
            card.style.borderColor = 'var(--saffron)';
            card.style.boxShadow = '0 0 15px rgba(255, 107, 0, 0.2)';
            
            // Add a small "TODAY" label
            const badge = document.createElement('span');
            badge.className = 'revision-badge badge-orange';
            badge.style.marginLeft = '10px';
            badge.textContent = 'TODAY';
            dateElement.appendChild(badge);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    highlightToday();
});