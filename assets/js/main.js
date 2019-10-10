$(function(){
    $('.menu').on('click', function(){
        var ww = $(window).width();
        if(ww > 992){
            $('aside').toggleClass('hidden');
            $('section').toggleClass('full');
        }else{
            $('aside').toggleClass('active');
        }
    })
})