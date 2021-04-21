(function($) {
	$(function() {
		$(window).on('load resize', function() {
			sticky();
		});

		function sticky() {
			var w = $(window).width();

			// if (w < 750) {
			// 	$('.phone article').trigger('sticky_kit:detach');
			// } else {
			// 	$('.phone article').stick_in_parent({
			// 		offset_top: $('.header').outerHeight()
			// 	});
			// }
		}
		$(document).ready(function(){
			var credoInput = document.getElementsByClassName('credoinstallment');
			if (credoInput.length > 0) {
				var credoValue = JSON.parse(credoInput[0].getAttribute('value'));
				var orderId = new Date().getTime().toString();
				orderId = orderId.substring(8);

				credoValue.orderCode = orderId.toString();
				credoInput[0].setAttribute('value', JSON.stringify(credoValue));

				document.querySelector('.credo').addEventListener('click', function(){
					document.getElementById('credoInstallmentSubmit').click();
				});
			}
		});
	});


	var sr = ScrollReveal({
		origin   : "bottom",
		distance : "64px",
		duration : 900,
		delay    : 0,
		scale    : 1
	});

	sr.reveal('.phone li');
}(jQuery));
