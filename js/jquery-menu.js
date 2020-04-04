$(document).ready(function () {
	$('.nav-btn').click(function () {
		$('.btn-btn span').toggleClass('active');
		$('.top-nav').slideToggle();
	});
	$('.btn1').click(function () {
		$('.dropdown-menu1').toggleClass('onclick');
		$('.btn1 svg').toggleClass('rotate');
	});
	$('.btn2').click(function () {
		$('.dropdown-menu2').toggleClass('onclick');
		$('.btn2 svg').toggleClass('rotate');
	});

	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height > 120) {
			$('.header').css({
				position: 'fixed',
				borderBottom: '1px solid #c0ceea',
				animation: 'fadeIn 0.5s',
			});
		} else {
			$('.header').css({
				position: 'relative',
				borderBottom: 'none',
				animation: 'none',
			});
		}
	});
});
