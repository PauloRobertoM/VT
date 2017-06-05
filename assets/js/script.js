(function($, window) {
	$('.parallax-window2').parallax({imageSrc: 'assets/images/back.jpg'});

	$('.nav a').on('click', function(){
	    $('.btn-navbar').click(); //bootstrap 2.x
	    $('.navbar-toggle').click() //bootstrap 3.x by Richard
	});
})(jQuery, window);