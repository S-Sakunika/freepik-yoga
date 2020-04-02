$(document).ready(function() {

	$('#loading').delay(2000).fadeOut(300);

	// Initialize and configure fullpage js
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		anchors:['home', 'lessons', 'contact'],
		menu: '#navigation',
		navigation: true,
		navigationPosition: 'right',
		verticalCentered: false,
	})	
});