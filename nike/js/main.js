(function () {
    new Swiper('.hero__slider', {
        spaceBetween: 40,
        slidesPerView: 3,

        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },

    });
})();

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