$(document).ready(() => {

	$('.me').mouseenter(() => {
		$('.me').attr('src', './images/shay-kennedy-2.jpg');
	})
	.mouseout(() => {
		$('.me').attr('src', './images/shay-kennedy-1.jpg');
	})

});