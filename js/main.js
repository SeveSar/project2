// document.documentElement.style.setProperty('--animate-duration', '10s');

$(document).ready(function(){

    $('ul[data-target="ideas__list"]').on('click','li:not(.btn-tabs__item_active)', function(){
    
        $(this)
        .addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active')
        .closest("article.ideas__item").find("div.ideas__item-descr").slideUp(700)
        .eq($(this).index()).slideDown(700);
       
        
    });

    $('ul[data-target="work__list"]').on('click','li:not(.btn-tabs__item_active)', function(){
        $(this).addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active');
        let filterData = $(this).data('filter');
        if (filterData == 'all') {
            $(".work__catalog-item").closest(".work__wrap").removeClass("hide");
        }
        else {
        $('.work__catalog-item').each(function (i) {
                if ($(this).data('cat') != filterData) {
                    $(this).closest('.work__wrap').addClass('hide');
                } else {
                    $(this).closest('.work__wrap').removeClass('hide');
                }
        });
        }
        
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
    
    $('button[type = "submit"]').on('click', function(e) {
        e.preventDefault();
    });
    
    // burger

    let burgerelement = $('.burger');
    let navbarElement = $(".header__navbar");
    burgerelement.on('click',toggleMenu);
    function toggleMenu () {
        $(burgerelement).toggleClass('active');
        $(navbarElement).toggleClass("active");
        $("body").toggleClass('no-scroll');
    }
    $('a[data-scroll]').on('click', function() {
        let scrollId =  $(this).data('scroll');
        let offsetTopItem = $(scrollId).offset().top;
        $('html, body').animate({scrollTop: offsetTopItem - 50}, 700);
        $(burgerelement).removeClass('active');
        $(navbarElement).removeClass("active");
        $("body").removeClass('no-scroll');
        
    });
    // arrow-up
    let featureOffsetTop = $('.feature').offset().top;
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > featureOffsetTop) {
            $(".arrow-up").addClass('active');
            // setTimeout(function() {
            //     $(".arrow-up").css({
            //         right: "25px"
            //     });
            // }, 500)
        } else {
            $(".arrow-up").removeClass('active');
            
        }
    });
    $(".arrow-up").on('click', function(e) {
        e.preventDefault();
        let attrBlock = $(this).attr('href');
        let blockContentPosition = $(attrBlock).offset().top;
        console.log(blockContentPosition);
        $("html, body").animate({scrollTop: blockContentPosition}, 500);
    });

    // play video
    $(".play_yt").on('click', function() {
        $(this).css({display: 'none'});
        $('.design__video iframe').attr('src',"https://www.youtube.com/embed/AWKzr6n0ea0?autoplay=1");
    });
});

let headerH = document.querySelector('.header').offsetHeight;
let scrollPosition = window.scrollY;
let header = document.querySelector('.header');
checkScroll(scrollPosition, headerH)

window.addEventListener('scroll', function() {
    headerH = document.querySelector('.header').offsetHeight;
    scrollPosition = window.scrollY;
    checkScroll(scrollPosition, headerH);
});
window.addEventListener('resize', function() {
    headerH = document.querySelector('.header').offsetHeight;
    scrollPosition = window.scrollY;
    checkScroll(scrollPosition, headerH);
});

function checkScroll(scrollPosition, headerH){
    if (scrollPosition > headerH){
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};