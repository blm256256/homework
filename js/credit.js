$(document).ready(function() {
    $('.division-city').on({
        //鼠标悬浮
        'mouseover': function() {
            $('.division-city>a').css('color', 'red');
            $('.div-city-img').html('v');
        },
        //鼠标移开
        'mouseout': function() {
            $('.division-city>a').css('color', '#222');
            $('.div-city-img').html('^');

        }
    });
    $('.header-nav-title').on({
        'mouseover': function() {
            $(this).css('color', 'red');
        },
        'mouseout': function() {
            $(this).css('color', '#222');


        }
    });

    $('.talk-airticle li a').mouseover(function() {
        $(this).css('color', '#fd521d');
    }).mouseout(function() {
        $(this).css('color', '#222');
    });



    $('.az').mouseover(function() {
        $(this).css('border', '1px solid #fd521d');
    }).mouseout(function() {
        $(this).css('border', '1px solid #ccc');
    });





    $('.link-section ul li a').mouseover(function() {
        $(this).css('color', '#fd521d');
    }).mouseout(function() {
        $(this).css('color', '#999');
    });




    $('.tel-section .sns a p').mouseover(function() {
        $(this).css('color', '#fd521d');

    }).mouseout(function() {
        $('.tel-section .sns a p').css('color', '#999');
        // $('.tel-section .sns a em').css('background', 'none');
    });



    $('.search-by li a').mouseover(function() {
        $(this).css('color', '#fd521d');
        $(this).css('background', '#df9b87');
    }).mouseout(function() {
        $(this).css('color', '#675449');
        $(this).css('background', 'none');
    });

});