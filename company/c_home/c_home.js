//company login home page js file
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.querySelector('.language-menu');
    const selectedLang = document.getElementById('selected-lang');

    // Handle Menu Toggle
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            menu.classList.toggle('show');
        });

        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    }

    // Handle Language Dropdown
    if (languageToggle && languageMenu) {
        languageToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            languageMenu.classList.toggle('show');
        });

        document.addEventListener('click', function (event) {
            if (!languageMenu.contains(event.target) && !languageToggle.contains(event.target)) {
                languageMenu.classList.remove('show');
            }
        });

        // Handle Language Selection
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                selectedLang.textContent = lang.toUpperCase();
                localStorage.setItem('selectedLanguage', lang);
                languageMenu.classList.remove('show');
            });
        });

        // Load Selected Language from Local Storage
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang) {
            selectedLang.textContent = savedLang.toUpperCase();
        }
    }
});
