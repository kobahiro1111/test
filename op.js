$(function() {
    
    $('#title').click(function() {
        $('html,body').animate({
            'scrollTop': 0,
        }, 500);
    });

    let isClicked = false;
    let clickNumber = '';
    

    $('.button1').click(function() {
        if(isClicked && clickNumber == 1) {
                $('.border1').css('z-index',10);
                isClicked = false;
                clickNumber = '';
        } else {
                $('.border1').css('z-index',30);
                $('.border2').css('z-index',10);
                $('.border3').css('z-index',10);
                $('.border4').css('z-index',10);
                isClicked = true;
                clickNumber = 1;
        }                 
    });

    $('.button2').click(function() {
        if(isClicked && clickNumber == 2) {
                $('.border2').css('z-index',10);
                isClicked = false;
                clickNumber = '';
        } else {
                $('.border1').css('z-index',10);
                $('.border2').css('z-index',30);
                $('.border3').css('z-index',10);
                $('.border4').css('z-index',10);
                isClicked = true;
                clickNumber = 2;
        }            
    });

    $('.button3').click(function() {
        if(isClicked && clickNumber == 3) {
                $('.border3').css('z-index',10);
                isClicked = false;
                clickNumber = '';
        } else {
                $('.border1').css('z-index',10);
                $('.border2').css('z-index',10);
                $('.border3').css('z-index',30);
                $('.border4').css('z-index',10);
                isClicked = true;
                clickNumber = 3;
        }
    });

    $('.button4').click(function() {
        if(isClicked && clickNumber == 4) {
                $('.border4').css('z-index',10);
                isClicked = false;
                clickNumber = '';
        } else {
                $('.border1').css('z-index',10);
                $('.border2').css('z-index',10);
                $('.border3').css('z-index',10);
                $('.border4').css('z-index',30);
                isClicked = true;
                clickNumber = 4;
        }
    });
});