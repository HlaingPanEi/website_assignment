var carouselWidth = $('.carousel-inner')[0].scrolwidth;
var cardWdith = $('.carousel-item').width();

var scrolPosition = 0;

$('.carousel-control-next').on('click', function(){
    if(scrolPosition < (carouselWidth -(cardWdith * 4))){
    console.log('next');
    scrolPosition = scrolPosition + cardWdith;
    $('.carousel-inner').animate({scrollLeft: scrolPosition},
        600);
    }
});

$('.carousel-control-pre').on('click', function(){
    if(scrolPosition > 0){
    console.log('pre');
    scrolPosition = scrolPosition + cardWdith;
    $('.carousel-inner').animate({scrollLeft: scrolPosition},
        600);
    }
});
