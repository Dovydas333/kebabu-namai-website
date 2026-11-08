     function setLanguage(lang) {
            document.querySelectorAll('[data-lt][data-en]').forEach(el => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });
            document.getElementById('btn-lt').classList.toggle('active', lang === 'lt');
            document.getElementById('btn-en').classList.toggle('active', lang === 'en');
        }

        function filterCategory(category, btn) {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.menu-item-card').forEach(card => {
                if (category === 'visi' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        const hamburgerBtn = document.getElementById ('hamburger');
        const navLinks = document.getElementById ('nav-links');

        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener ('click', () => {
                 hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
            });
        
                navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

}

