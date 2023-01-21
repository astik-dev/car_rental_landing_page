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
});



// Lazy loading
const lazyImages = document.querySelectorAll(".img-lazy-loading[data-src]");
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];

if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if(lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute("data-src");
		}
		delete lazyImagesPositions[imgIndex];
	}
}
function lazyScroll() {
	if (document.querySelectorAll(".img-lazy-loading[data-src]").length > 0) {
		lazyScrollCheck();
	}
}

window.addEventListener("scroll", lazyScroll);