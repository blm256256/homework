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



    //轮播
    var t;
    var index = 0;
    t = setInterval(play, 2000);

    function play() {
        index++;
        if (index > 4) {
            index = 0;
        }
        $('.lunbobox ul li').eq(index).css({
            'background-color': '#19191a',
            'color': '#cf6e1f'
        }).siblings().css({
            'background-color': '#262626',
            'color': 'white'
        });

        $('.lunbo a').eq(index).fadeIn(1000).siblings().fadeOut(1000);
    }


// var index=0;
// setInterval(function(){
//   index++;
//   if(index>4){
//       index=0;
//   }
 
//   $('.lunbobox ul li').eq(index).css({
//     'background-color': '#19191a',
//     'color': '#cf6e1f'
//   }).siblings().css({
//     'background-color': '#262626',
//     'color': 'white'
//   });
//   $('.lunbo a').eq(index).fadeIn(2000).siblings().fadeOut(2000);
// },4000);







    //鼠标悬浮，切换图片
    $('.lunbobox ul li').mouseover(function() {
        $(this).css({
            'background-color': '#19191a',
            'color': '#cf6e1f'
        }).siblings().css({
            'background-color': '#262626',
            'color': 'white'
        });
        var index = $(this).index();
        $('.lunbo a').eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //鼠标移进 移出
    $('.lunbobox ul li,.lunbo a img').hover(
        //鼠标移进
        function() {
            clearInterval(t);
        },
        //鼠标移出
        function() {
            t = setInterval(play, 2000);

            function play() {
                index++;
                if (index > 4) {
                    index = 0;
                }
                $('.lunbobox ul li').eq(index).css({
                    'background-color': '#19191a',
                    'color': '#cf6e1f'
                }).siblings().css({
                    'background-color': '#262626',
                    'color': 'white'
                });

                $('.lunbo a').eq(index).fadeIn(1000).siblings().fadeOut(1000);
            }
        });



    $('.buy-filter ul li a').mouseover(function() {
        $(this).css('color', 'red');
    }).mouseout(function() {
        $(this).css('color', 'black');
    });
    $('#cuxiao').mouseover(function() {
        $(this).css('color', 'red');
    }).mouseout(function() {
        $(this).css('color', 'red');
    });
    $('.js-car-title2').mouseover(function() {
        $(this).css('color', '#fd521d');
    }).mouseout(function() {
        $(this).css('color', '#222');
    });



    $('.btn').mouseover(function() {
        $(this).css({
            'color': 'white',
            'background': '#fd521d'
        });
    }).mouseout(function() {
        $(this).css({
            'color': '#fd521d',
            'background': 'white'
        });
    });



    //媒体报道和新闻中心
    $('.media-reportl').on({
        'mouseover': function() {
            $(this).css('color', '#fd521d');
            $('.media-reportr').css('color', '#000');
            $('#media-report-normal').css('display', 'block');
            $('#media-report-news').css('display', 'none');
        }
    });
    $('.media-reportr').on({
        'mouseover': function() {
            $(this).css('color', '#fd521d');
            $('#media-report-normal').css('display', 'none');
            $('#media-report-news').css('display', 'block');
            $('.media-reportl').css('color', '#000');
        }
    });



    // var m;
    // var index = 0;
    // m = setInterval(start, 2000);

    // function start() {
    //     index++;
    //     if (index > 2) {
    //         index = 0;
    //     }

    //     $('.category-lunbo li').eq(index).css(

    //         'background-color', '#fd521d'
    //     ).siblings().css(
    //         'background-color', '#ccc'
    //     );

    //     $('.category-lunbobox').eq(index).fadeIn(1000).siblings().fadeOut(1000);
    // }



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


    // $('.search-by li').on({
    //     //鼠标悬浮
    //     'mouseover': function() {
    //         $('this>a').css('color', 'red');

    //     },
    //     //鼠标移开
    //     'mouseout': function() {
    //         $('.search-by li>a').css('color', '#222');


    //     }
    // });


});