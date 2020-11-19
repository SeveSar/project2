// document.documentElement.style.setProperty('--animate-duration', '10s');

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

    // fixed header with JQUERY
    // let promoH = $('.promo').innerHeight();
    // let scrollPos = $(window).scrollTop();
    // checkScrollPos (promoH, scrollPos);

    // $(window).on('scroll resize load', function () {
    //     promoH = $('.promo').innerHeight();
    //     scrollPos = $(this).scrollTop();
        
    //     checkScrollPos (promoH, scrollPos);

        
    // });


    
    // function checkScrollPos (promoH, scrollPos) {

    //     if (scrollPos > promoH){
    //         $(".header").addClass('fixed');
    //     } else {
    //         $(".header").removeClass('fixed');
    //     }
    // }

    $('a[data-scroll]').on('click', function() {
        let scrollId =  $(this).attr('data-scroll');
        let offsetTopItem = $(scrollId).offset().top;
        $('html, body').animate({scrollTop: offsetTopItem - 50}, 700);
        
    });

    $('button[type = "submit"]').on('click', function(e) {
        e.preventDefault();
        
    });
    
});

let promoH = document.querySelector('.promo').offsetHeight;
let scrollPosition = window.scrollY;
let header = document.querySelector('.header');
checkScroll(scrollPosition, promoH)

window.addEventListener('scroll', function() {
    promoH = document.querySelector('.promo').offsetHeight;
    scrollPosition = window.scrollY;
    checkScroll(scrollPosition, promoH);
});
window.addEventListener('resize', function() {
    promoH = document.querySelector('.promo').offsetHeight;
    scrollPosition = window.scrollY;
    checkScroll(scrollPosition, promoH);
});

function checkScroll(scrollPosition, promoH){
    if (scrollPosition > promoH){
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};