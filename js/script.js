const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });