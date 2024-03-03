
AOS.init();

$(window).scroll(function () {
    var top = $(this).  scrollTop();
    console.log(top);   
    if($(this).scrollTop() > 100){
        $('.header-counselor').addClass('_sticky');
    }else{
        $('.header-counselor').removeClass('_sticky');
    }
})

document.querySelector('.manu').addEventListener('click', function () {
    var navList = document.getElementById('nav_list');
    navList.classList.add('manu_active');
});


document.querySelector('.close').addEventListener('click', function () {
    var navList = document.getElementById('nav_list');
    navList.classList.remove('manu_active');
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

