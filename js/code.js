const navWrapper = document.querySelector('.nav-wrapper');

navWrapper.addEventListener('click', event => {
    let active = document.querySelector('.nav-wrapper__item--active');

    if(event.target !== event.target.classList.contains('nav-wrapper__item--active') && event.target !== navWrapper) {
        event.target.classList.add('nav-wrapper__item--active');
        active.classList.remove('nav-wrapper__item--active');
    };
});