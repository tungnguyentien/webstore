// Empty JS for your own code to be here
$(document).ready(function() {
    var shoppingCartItems = [];
    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
    };
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
        var product = $(this).parent().siblings('.product-name').find('p');
        var name = product.children('.name').html();
        var price = product.children('.product-price').html();
        var modal = $('.content-modal');
        modal.find('.product-name').text(name);
        modal.find('.price').text(price);
        var item = {
            id: Math.floor((Math.random() * 100000000) + 1),
            name: name,
            price: price,
            quantity: 1,
            image: src
        };
        console.log(item);
        var quantity;
        var exitsts = false;
        if (shoppingCartItems.length > 0) {
            $.each(shoppingCartItems, function(index, value) {
                if (value.name == item.name) {
                    value.quantity += 1;
                    quantity = value.quantity;
                    exitsts = true;
                    return false;
                }
            });
        }

        if (!exitsts) {
            shoppingCartItems.push(item);
        } else {
            modal.find('.number-product').val(quantity);
        }
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);

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
        var name = $(this).parent().siblings('.product-name').text();
        updateNumberProducts(name, num + 1);
    });
    $('span.minus').click(function() {
        var num = parseInt($(this).siblings('input').val());
        if (num <= 1) num = 2;
        $(this).siblings('input').val(num - 1);
        var name = $(this).parent().siblings('.product-name').text();
        updateNumberProducts(name, num - 1);
    });

    $('.btn-checkout').click(function() {
        window.location.replace('checkout_page.html');
    });
    $('.btn-continue').click(function() {
        $('.layout-cart').fadeOut(300);
        $('.backdrop').fadeOut(300);
    });

    function updateNumberProducts(name, number) {
        $.each(shoppingCartItems, function(index, value) {
            if (value.name == name) {
                value.quantity = number;
            };
        });
        console.log(shoppingCartItems);
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
    }
    // $('.number-product').change(function(){
    //     console.log($(this));
    // })
});
