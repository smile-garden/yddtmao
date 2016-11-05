var mySwiper = new Swiper ('#banner', {
    autoplay: 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

    })
var mySwiper = new Swiper ('#dierlunbo', {
    autoplay: 2000,
    direction: 'vertical',
    loop: true,
})
var mySwiper = new Swiper('#di3lunbo',{
    // loop : true,
    slidesPerView : 'auto',
    loopedSlides :3,
})
$(window).scroll(function() {
    if ($(document).scrollTop() > 154) {
        $(".daohang-box").addClass("daohang-bian")
    }else {
        $(".daohang-box").removeClass("daohang-bian")
    }
})

$('.daohang-zuo').on('click',function(){
    $('.zz').addClass('move').removeClass('moves');
})
$('.zz .dianji').on('click',function(){
    $('.zz').removeClass('move').addClass('moves');
})
$('.lis').on('click',function(){
    var i = $(this).index();
    $('body').toggleClass('scroll');
    $('.lis').removeClass('active');
    $(this).addClass('active');
    $('.liss').removeClass('active').eq(i).addClass('active');
});




