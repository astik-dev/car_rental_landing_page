const headerSwiper = new Swiper(".header__swiper", {
	direction: "vertical",
	loop: true,
	pagination: {
		el: ".header__pagination",
		clickable: true,
	},
	autoplay: {
		delay: 6000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 1500,
	simulateTouch: false,
	allowTouchMove: false,
});