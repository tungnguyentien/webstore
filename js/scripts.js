// Empty JS for your own code to be here
$(document).ready(function() {
    // Search
    $('#search_query_top').on('click', function() {
        $(this).attr('value', '');
        $('.button-search').addClass('active');
    });

    $('#search_query_top').on('focusout', function() {
        $(this).attr('value', 'Search...');
        $('.button-search').removeClass('active');
    });

    // Add item to cart
    $('.add-to-cart').click(function() {
        var height = $('body').height();
        $('.backdrop').css('height', height);
        $('.backdrop').fadeIn(250);
        $('.layout-cart').fadeIn(450);
        var img = $(this).parent().siblings('.container').find('img');
        var src = img.attr('src');
        console.log(img.attr('src'));
        $('.content-modal .image-view img').attr('src', src);
    });
    $('.backdrop').click(function() {
        $('.layout-cart').fadeOut(300);
        $(this).fadeOut(300);
    });
    $('.icon-remove').click(function() {
        $('.layout-cart').fadeOut(300);
        $('.backdrop').fadeOut(300);
    });
    // Edit number of product
    $('span.add').click(function() {
        var num = parseInt($(this).siblings('input').val());
        $(this).siblings('input').val(num + 1);
    });
    $('span.minus').click(function() {
        var num = parseInt($(this).siblings('input').val());
        if (num <= 1) num = 2;
        $(this).siblings('input').val(num - 1);
    });
});
