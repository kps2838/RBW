$(function(){
    $('#gnb > ul > li').hover(function(){
        $(this).find('.depth2').addClass('on')
    }, function(){
        $(this).find('.depth2').removeClass('on')
    });

    $('.section-bg').hover(function(){
        $(this).find('.title-group').addClass('on');
    }, function(){
        $(this).find('.title-group').removeClass('on');
    });

    $('#mamamoo').hover(function(){
        $(this).css({"background-image" : "url(./images/bg-mamamoo-2.jpg)"});
    },
    function(){
        $(this).css({"background-image" : "url(./images/bg-mamamoo-1.jpg)"});
    });

    $('#oneus').hover(function(){
        $(this).css({"background-image" : "url(./images/bg-oneus-2.jpg)"});
    },
    function(){
        $(this).css({"background-image" : "url(./images/bg-oneus-1.jpg)"});
    });

    $('#onewe').hover(function(){
        $(this).css({"background-image" : "url(./images/bg-onewe-2.jpg)"});
    },
    function(){
        $(this).css({"background-image" : "url(./images/bg-onewe-1.jpg)"});
    });

    $('#vromance').hover(function(){
        $(this).css({"background-image" : "url(./images/bg-vromance-2.jpg)"});
    },
    function(){
        $(this).css({"background-image" : "url(./images/bg-vromance-1.jpg)"});
    });

    $('#purplekiss').hover(function(){
        $(this).css({"background-image" : "url(./images/bg-purplekiss-2.jpg)"});
    },
    function(){
        $(this).css({"background-image" : "url(./images/bg-purplekiss-1.jpg)"});
    });



})