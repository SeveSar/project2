$(document).ready(function(){

    $('ul.btn-tabs').on('click','li:not(.btn-tabs__item_active)', function(){
    
        $(this)
        .addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active')
        .closest("article.ideas__item").find("div.ideas__item-descr").slideUp(700).delay(500)
        .eq($(this).index()).slideDown(700);
       
        
    });

    $('ul.btn-tabs').on('click','li:not(.btn-tabs__item_active)', function(){
       
        $(this)
        .addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active')
        .closest("div.container").find("div.work__catalog").fadeOut(700).delay(700)
        .eq($(this).index()).fadeIn(700);
       
        
    });

    let promoH = $('.promo').innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScrollPos (promoH, scrollPos);

    $(window).on('scroll resize', function () {
        promoH = $('.promo').innerHeight();
        scrollPos = $(this).scrollTop();
        checkScrollPos (promoH, scrollPos);
        console.log(scrollPos);
        
    });


    
    function checkScrollPos (promoH, scrollPos) {

        if (scrollPos >= promoH){
            $(".header").addClass('fixed');
        } else {
            $(".header").removeClass('fixed');
        }
    }
    
});