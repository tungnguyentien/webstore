// Empty JS for your own code to be here
$(document).ready(function() {
	$('#search_query_top').on('click',function(){
		$(this).attr('value','');
		$('.button-search').addClass('active');
	});

	$('#search_query_top').on('focusout',function(){
		$(this).attr('value','Search...');
		$('.button-search').removeClass('active');
	})
});