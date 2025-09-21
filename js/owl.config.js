$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		dots: false,
		loop: true,
		autoplay: true,
		responsive: { 
			0: { items: 1 },
			400: { items: 2 },
			600: { items: 3 }, 
			1023: { items: 4 },
			1024: { items : 5},
			1280: { items : 4}
			},
	});
});