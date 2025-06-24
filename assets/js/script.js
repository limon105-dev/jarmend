$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// mobile-dropdown responsive accordion js start--
	$(".dropdown-sub-menu").slideUp();
	// **..mobile-dropdown-accordion js start..**
	$('.dropdown-btn1').on('click', function () {
		$(this).next(".dropdown-sub-menu1").slideToggle();
		$(this).toggleClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	// **..mobile-dropdown-accordion js start..**
	$('.dropdown-btn2').on('click', function () {
		$(this).next(".dropdown-sub-menu2").slideToggle();
		$(this).toggleClass('active');
	});
	// **..mobile-dropdown-accordion js end..**
	// mobile-dropdown responsive accordion js end--

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(this).toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

	// cart-sidebar js start---
	$(".cart-sidebar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".cart-sidebar-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").removeClass("active");
		$("body").toggleClass("active");
	});

	$(".side-cart-close-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});
	// cart-sidebar js end---

	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});
	// filter sidebar js end--

	// **..filter-accordion js start..**
	$('.accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..filter-accordion js end..**

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// --tab js start--
	$('.tab-nav-item:first-child').addClass('active');
	$('.desktop-tab-content-item').hide();
	$('.desktop-tab-content-item:first').show();

	$('.desktop-tabs-nav-item-link').click(function () {
		$('.tab-nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.desktop-tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});
	// --tab js end--

})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// topbar slider js start--
var swiper = new Swiper(".top-bar-slider", {
	slidesPerView: 1,
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	}
});
// topbar slider js end--

// banner slider js start--
var swiper = new Swiper(".banner-slider", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	speed: 1000,
	effect: "fade",
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// banner slider js end--

// card-img-slider js start--
var swiper = new Swiper(".card-img-slide", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 2.2,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3.4,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// card-img-sliderr js end--

// product-slider js start---
var swiper = new Swiper(".product-slider-thumb", {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 4,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
			slidesPerView: 5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 5,
		}
	}
});
var swiper2 = new Swiper(".product-slider", {
	loop: true,
	autoHeight: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});
// product-slider js end---

// related-product slider js start--
var swiper = new Swiper(".related-product-slider", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 2.2,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3.4,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// related-product slider js end--

// side-cart-slider js start--
var swiper = new Swiper(".side-cart-slider", {
	slidesPerView: 2.2,
	spaceBetween: 10,
	grabCursor: true,
	loop: false,
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});
// side-cart-slider js end--

// progesss-bar js start--
const progress = document.querySelector('.progress');
progress.addEventListener('input', function () {
	const value = this.value;
	this.style.background = `linear-gradient(to right,rgb(36, 40, 51) 0%,rgb(36, 40, 51) ${value}%,rgb(216, 216, 216) ${value}%)`
})
// progesss-bar js end--

// content animation--
new WOW().init();