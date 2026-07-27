
(function () {
    const toggleBtn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    const body = document.body;

    // check stored preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark');
        icon.className = 'fas fa-sun';
        label.textContent = 'Light';
    } else {
        body.classList.remove('dark');
        icon.className = 'fas fa-moon';
        label.textContent = 'Dark';
    }

    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        if (isDark) {
            icon.className = 'fas fa-sun';
            label.textContent = 'Light';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.className = 'fas fa-moon';
            label.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        }
    });

    // smooth nav scrolling (optional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
})();