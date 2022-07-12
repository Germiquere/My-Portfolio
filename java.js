
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        
        },
      },
      

    
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });