(function () {

	'use strict'

	// load fonst
	function loadFonst(href) {
		const head = document.querySelector('head');
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		head.appendChild(link)
	}

	loadFonst('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

	// swiper testimonials
	const swiperTestimonials = new Swiper('.testimonials__swiper', {
		preloadImages: false,
		lazy: true,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// swiper gallery
	const swiperGallery = new Swiper('.gallery__swiper', {
		preloadImages: false,
		lazy: true,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	window.addEventListener("load", function () {
		// Access the form element...
		const form = document.querySelector('.hero__form')

		function sendData() {
			const XHR = new XMLHttpRequest();

			// Bind the FormData object and the form element
			const FD = new FormData(form);

			// Define what happens on successful data submission
			XHR.addEventListener("load", function (event) {
				//alert(event.target.responseText);
				const fancyboxThanks = new Fancybox([
					{
						src: "<div class='thanks'><h2>Thank you for your request!</h2><p>someone from The Romeo Team will get back to you shortly</p></div>",
						type: "html",
					},
				]);

				setTimeout(() => {
					fancyboxThanks.close();
					form.reset()
				}, 3000)
			});

			// Define what happens in case of error
			XHR.addEventListener("error", function (event) {
				alert('Oops! Something went wrong.');
			});

			// Set up our request
			XHR.open("POST", "php/form.php");

			// The data sent is what the user provided in the form
			XHR.send(FD);
		}

		// ...and take over its submit event.
		form?.addEventListener("submit", function (event) {
			event.preventDefault();
			sendData();
		});
	});

})();