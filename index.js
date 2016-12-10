$(document).ready(() => {

	$('.me').mouseenter(() => {
		$('.me').attr('src', './images/profile-pic-2.jpg');
	})
	.mouseout(() => {
		$('.me').attr('src', './images/profile-pic-1.jpg');
	})

});