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
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('cd-days').textContent = days;
    document.getElementById('cd-hrs').textContent = hrs;
    document.getElementById('cd-min').textContent = min;
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);