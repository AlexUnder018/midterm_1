const burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger_menu');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burger_menu.classList.toggle('active');
    header.classList.toggle('active');
})