$(document).ready(function () {
	//Open-close mobile nav menu
	$('.js-menu-btn').click(function () {
		$('.js-menu-btn span').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		$('.js-header__nav').slideToggle();
	});
//Open-close mobile sub-nav menu
	$('.js-arrow-btn').click(function () {
		$(this).parent().find('.menu__sub-nav').slideToggle();
		$(this).parent().find('.js-arrow-btn').toggleClass('arrow-btn--rotate');
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
