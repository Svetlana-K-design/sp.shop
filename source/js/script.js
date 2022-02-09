var navMain = document.querySelector('.navigation');
var navToggleOpened = document.querySelector('.navigation__toggle-opened');
var navToggleClosed = document.querySelector('.navigation__toggle-closed');
var fun = document.querySelector('.function');
var funToggle = document.querySelector('.function__toggle');
var filterForm = document.querySelector('.filter__form');
var filterButton = document.querySelector('.filter__button');
var filterToggleOpened = document.querySelector('.filter__toggle-opened');

navMain.classList.remove('navigation--nojs');

navToggleOpened.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

navToggleClosed.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--opened')) {
    navMain.classList.remove('navigation--opened');
    navMain.classList.add('navigation--closed');
  } else {
    navMain.classList.add('navigation--opened');
    navMain.classList.remove('navigation--closed');
  }
});

fun.classList.remove('function--nojs');

funToggle.addEventListener('click', function() {
  if (fun.classList.contains('function--closed')) {
    fun.classList.remove('function--closed');
    fun.classList.add('function--opened');
  } else {
    fun.classList.add('function--closed');
    fun.classList.remove('function--opened');
  }
});

filterToggleOpened.addEventListener('click', function() {
  if (window.matchMedia("(min-width: 1200px)").matches) return;
    filterForm.style.display = 'block';
    filterToggleOpened.style.display = 'none';
});

filterButton.addEventListener('click', function() {
  if (window.matchMedia("(min-width: 1200px)").matches) return;
    filterForm.style.display = 'none';
    filterToggleOpened.style.display = 'block';
});

