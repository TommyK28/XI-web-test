$(document).ready(function () {
	//Open-close mobile nav menu
	$('.js-menu-btn').click(function () {
		$('.js-menu-btn span').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		$('.js-header__nav').slideToggle();
	});
//Open-close mobile sub-nav menu
	$('.js-arrow-btn').click(function () {
		$(this).parent().find('.js-menu__sub-nav').slideToggle();
		$(this).parent().find('.js-menu__sub-nav').toggleClass('js-menu__sub-nav--open');
		$(this).parent().find('.js-arrow-btn svg').toggleClass('js-arrow--rotate');
	});
	//After scrolling set header position fixed
	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 120) {
			$('.header').addClass('header-position--fixed');
		} else {
			$('.header').removeClass('header-position--fixed');
		}
	});
});
