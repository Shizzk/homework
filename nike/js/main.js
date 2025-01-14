// Слайдер
(function () {
    new Swiper('.hero__slider', {
        spaceBetween: 40,
        slidesPerView: 'auto',
        loop: 'true',

        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },
    });
})();

// Меню с выбором размера
(function () {
    const sizeButton = document.querySelector('.hero__size');
    const sizeMenu = document.querySelector('.hero__size-menu');
    const sizeSpan = sizeButton.querySelector('.hero__size-number');

    sizeMenu.style.maxHeight = null; 
    sizeMenu.style.opacity = 0;

    sizeButton.addEventListener('click', (e)=> {
        e.preventDefault();

        if (sizeMenu.style.maxHeight) {
            sizeMenu.style.maxHeight = null;
            sizeMenu.style.opacity = 0;
        } else {
            sizeMenu.style.maxHeight = sizeMenu.scrollHeight + 'px';
            sizeMenu.style.opacity = 1;
        }
    });

    sizeMenu.addEventListener('click', (e)=> {
        const target = e.target.closest('.hero__size-link');

        if (target) {
            e.preventDefault();
            const selectedSize = target.textContent;
            sizeSpan.textContent = selectedSize;
            sizeMenu.style.maxHeight = null;
            sizeMenu.style.opacity = 0;
        }
    });

    document.addEventListener('click', (e)=> {
        if (!sizeButton.contains(e.target) && !sizeMenu.contains(e.target)) {
            sizeMenu.style.maxHeight = null;
            sizeMenu.style.opacity = 0;
        }
    });
})();

// Бургер-меню
(function () {
    const burgerNav = document.querySelector('.burger-nav');
    const burgerIcon = document.querySelector('.burger-icon'); // Переключатель бургер-меню

    burgerIcon.addEventListener('click', toggleBurgerMenu); // Убираем openModal здесь
    burgerNav.addEventListener('click', closeBurgerMenu); // Убираем openModal здесь

    function toggleBurgerMenu(e) {
        document.body.classList.toggle('body--open-menu'); // Используем класс для управления видимостью меню
        burgerNav.style.display = document.body.classList.contains('body--open-menu') ? 'flex' : 'none'; // Показываем или скрываем меню
    }

    function closeBurgerMenu(e) {
        const target = e.target;

        // Закрываем меню, если кликнули на любой элемент меню или за пределами меню
        if (target.closest('.burger-nav__link') || 
            (target.closest('.burger') && !target.closest('.burger-nav'))) {
            document.body.classList.remove('body--open-menu');
        }
    }
})();

