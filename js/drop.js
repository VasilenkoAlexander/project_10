document.addEventListener('DOMContentLoaded', () => {
    const menuBtns = document.querySelectorAll(".footer__navigation-title");
    const drops = document.querySelectorAll(".dropdown");

    menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.footer__navigation-item').querySelector('.dropdown');
            console.log(drop);

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('menu__button-active');
                }
            });
            drops.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('active-menu');
                }
            });
        drop.classList.toggle('active-menu');
        currentBtn.classList.toggle('menu__button-active');
        });
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.footer__navigation')) {
            menuBtns.forEach(el => {
                el.classList.remove('menu__button-active');
            });
            drops.forEach(el => {
                el.classList.remove('active-menu');
        });
        }
    });
});