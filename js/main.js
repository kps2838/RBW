$(function(){
    $('#gnb > ul > li').hover(function(){
        $(this).find('.depth2').addClass('on')
    }, function(){
        $(this).find('.depth2').removeClass('on')
    });

    $.stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        verticalOffset: 50,
    });
    
})