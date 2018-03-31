$(document).ready(function() {
    var t;
    var index = 0;
    t = setInterval(play, 2000);

    function play() {
        index++;
        if (index > 1) {
            index = 0;
        }
        $('.box>li').eq(index).css({
            'background-color': 'blue',
            'width': '9.6px',
            'height': '3.2px'
        }).siblings().css({
            'background-color': 'rgb(186, 186, 189)',
            'width': '6.4px',
            'height': '3.2px'
        });

        $('.lunbobox div').eq(index).fadeIn(500).siblings().fadeOut(1000);
    }
});