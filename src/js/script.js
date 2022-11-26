const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu__link'),
      overlay = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        menu.classList.remove('active');
    }
});

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

menuLink.forEach (item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});