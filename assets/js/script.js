(function($, window) {
	$('.parallax-window').parallax({imageSrc: 'assets/images/back.webp'});
	$('.parallax-window2').parallax({imageSrc: 'assets/images/back2.webp'});

	$('.nav a').on('click', function(){
	    $('.btn-navbar').click(); //bootstrap 2.x
	    $('.navbar-toggle').click() //bootstrap 3.x by Richard
	});
})(jQuery, window);