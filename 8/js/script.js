let navHeader = document.querySelector('.header-navigation');
let navToggle = document.querySelector('.header-navigation__toggle');

navHeader.classList.remove('header-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('header-navigation--closed')) {
    navHeader.classList.remove('header-navigation--closed');
    navHeader.classList.add('header-navigation--opened');
  } else {
    navHeader.classList.add('header-navigation--closed');
    navHeader.classList.remove('header-navigation--opened');
  }
});
