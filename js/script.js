// Header background swiper
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

	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

// Main swiper-1
const mainSwiper1 = new Swiper(".swiper-1__container", {
	grabCursor: true,
	slidesPerView: 1.97,
	spaceBetween: 20,
	freeMode: {
		momentum: false,
	},
	resistanceRatio: 0,
	breakpoints: {
		// when window width is >= 1px
		1: {
			slidesPerView: 1.0345,
			spaceBetween: 10,
		},
		// when window width is >= 576px
		576: {
			slidesPerView: 1.2,
			spaceBetween: 15,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 1.4,
			spaceBetween: 20,
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 1.6,
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 1.8,
		},
		// when window width is >= 1400px
		1400: {
			slidesPerView: 1.97,
		},
	},
});

// Main swiper-2
const mainSwiper2 = new Swiper(".swiper-2_container", {
	pagination: {
		el: ".swiper-2__pagination",
		clickable: true,
	},
	grabCursor: true,
	resistanceRatio: 0,
});
const mainSwiper2Container = document.querySelector(".swiper-2");



const menu = document.querySelector(".menu__items");
const body = document.querySelector("body");

document.addEventListener("click", function (event) {

	// Hamburger menu
	if (event.target.classList.contains("menu__burger") || event.target.parentNode.classList.contains("menu__burger")) {
		body.classList.toggle("_open-burger-menu");
		// If page is scrolled, add scroll height to menu height
		if (body.classList.contains("_open-burger-menu")) {
			menu.style.height = window.innerHeight + window.pageYOffset + "px";
		} else {
			menu.style.height = "";
		}
	} else if (body.classList.contains("_open-burger-menu")) {
		if (!event.target.classList.contains("menu__items") && !event.target.parentNode.classList.contains("menu__item") && !event.target.parentNode.classList.contains("menu__items")) {
			body.classList.remove("_open-burger-menu");
			menu.style.height = "";
		}
	}
});

window.addEventListener("resize", function (event) {

	// Hamburger menu
	if (body.classList.contains("_open-burger-menu")) {
		menu.style.height = window.innerHeight + window.pageYOffset + "px";
	}

	// Main swiper-2 "left" value
	mainSwiper2LeftValue();
});



// Lazy loading
let lazyImages = document.querySelectorAll(".img-lazy-loading[data-src]");

const lazyImagesObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.src = entry.target.dataset.src;
				observer.unobserve(entry.target);
			}
		});
	},
	{
		rootMargin: "50px 0px 0px 50px",
	},
);

lazyImages.forEach(image => lazyImagesObserver.observe(image));



// Main swiper-2 "left" value
function mainSwiper2LeftValue() {
	if (window.innerWidth >= 1920) {
		mainSwiper2Container.style.left = ((window.innerWidth - 1920) / 2) * (-1) + "px";
	} else {
		mainSwiper2Container.style.left = "0px";
	}
}
mainSwiper2LeftValue();