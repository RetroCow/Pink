var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(evt) {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.remove('main-nav--opened');
		navMain.classList.add('main-nav--closed');
	}
})

var priceTable = document.querySelector('.price__table');
var priceToggleFirst = document.querySelector('.price__toggle-first');
var priceToggleSecond = document.querySelector('.price__toggle-second');
var priceToggleThird = document.querySelector('.price__toggle-third');

priceToggleFirst.addEventListener('click', function(evt) {
	priceToggleFirst.classList.add('active');
	priceToggleSecond.classList.remove('active');
	priceToggleThird.classList.remove('active');
	priceTable.classList.add('price__first-slide');
	priceTable.classList.remove('price__second-slide');
	priceTable.classList.remove('price__third-slide');
})

priceToggleSecond.addEventListener('click', function(evt) {
	priceToggleSecond.classList.add('active');
	priceToggleFirst.classList.remove('active');
	priceToggleThird.classList.remove('active');
	priceTable.classList.add('price__second-slide');
	priceTable.classList.remove('price__first-slide');
	priceTable.classList.remove('price__third-slide');
})

priceToggleThird.addEventListener('click', function(evt) {
	priceToggleThird.classList.add('active');
	priceToggleFirst.classList.remove('active');
	priceToggleSecond.classList.remove('active');
	priceTable.classList.add('price__third-slide');
	priceTable.classList.remove('price__first-slide');
	priceTable.classList.remove('price__second-slide');
})

var slider = document.querySelector('.slider');
var slideFirst = slider.querySelector('.slider__first-slide');
var slideSecond = slider.querySelector('.slider__second-slide');
var slideThird = slider.querySelector('.slider__third-slide');
var sliderBack = document.querySelector('.slider__back-toggle');
var sliderNext = document.querySelector('.slider__next-toggle');
var sliderToggleFirst = document.querySelector('.slider__toggle-first');
var sliderToggleSecond = document.querySelector('.slider__toggle-second');
var sliderToggleThird = document.querySelector('.slider__toggle-third');

sliderToggleFirst.addEventListener('click', function(evt) {
	sliderToggleFirst.classList.add('active');
	sliderToggleSecond.classList.remove('active');
	sliderToggleThird.classList.remove('active');
	slideFirst.classList.add('active');
	slideSecond.classList.remove('active');
	slideThird.classList.remove('active');
})

sliderToggleSecond.addEventListener('click', function(evt) {
	sliderToggleSecond.classList.add('active');
	sliderToggleFirst.classList.remove('active');
	sliderToggleThird.classList.remove('active');
	slideSecond.classList.add('active');
	slideFirst.classList.remove('active');
	slideThird.classList.remove('active');
})

sliderToggleThird.addEventListener('click', function(evt) {
	sliderToggleThird.classList.add('active');
	sliderToggleFirst.classList.remove('active');
	sliderToggleSecond.classList.remove('active');
	slideThird.classList.add('active');
	slideFirst.classList.remove('active');
	slideSecond.classList.remove('active');
})

sliderBack.addEventListener('click', function(evt) {
	if (slideFirst.classList.contains('active')) {
		slideThird.classList.add('active');
		slideFirst.classList.remove('active');
	} else if (slideSecond.classList.contains('active')) {
		slideFirst.classList.add('active');
		slideSecond.classList.remove('active');
	} else {
		slideSecond.classList.add('active');
		slideThird.classList.remove('active');
	}
})

sliderNext.addEventListener('click', function(evt) {
	if (slideFirst.classList.contains('active')) {
		slideSecond.classList.add('active');
		slideFirst.classList.remove('active');
	} else if (slideSecond.classList.contains('active')) {
		slideThird.classList.add('active');
		slideSecond.classList.remove('active');
	} else {
		slideFirst.classList.add('active');
		slideThird.classList.remove('active');
	}
})