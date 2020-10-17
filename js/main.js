$(document).ready(function(){

    $('ul.btn-tabs').on('click','li:not(.btn-tabs__item_active)', function(){
        console.log('click');
        $(this)
        .addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active')
        .closest("article.ideas__item").find("div.ideas__item-descr").hide(700)
        .eq($(this).index()).show(700);
       
        
    });

    $('ul.btn-tabs').on('click','li:not(.btn-tabs__item_active)', function(){
        console.log('click');
        $(this)
        .addClass('btn-tabs__item_active').siblings().removeClass('btn-tabs__item_active')
        .closest("div.container").find("div.work__catalog").hide(700)
        .eq($(this).index()).show(700);
       
        
    });


    

    
});