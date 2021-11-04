/*
$(document).ready(function () {
    $('.header__burger').click(function (event) {
$('.header__burger,.navbar-header').toggleClass('active');
    });
});
*/
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header-menu__list');
const pageBody = document.querySelector('.page-body');
const headerMenuActive = document.querySelector('.header__menu--active');

burger.addEventListener("click", dropMenu);
document.addEventListener('click', outsideEvtListener);

function dropMenu() {
    headerMenu.classList.toggle('header__menu--active');
    burger.classList.toggle('header__menu--active');
    pageBody.classList.toggle('lock');
};

function outsideEvtListener(evt) {
    if (evt.target === burger ||
        burger.contains(evt.target) ||
        evt.target === headerMenu ||
        headerMenu.contains(evt.target))
    {
        return;
    };

    headerMenu.classList.remove('header__menu--active');
    burger.classList.remove('header__menu--active');
    pageBody.classList.remove('lock');
}

