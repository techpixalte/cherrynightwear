const $body = $('body');

    let oldScroll = 0;
document.addEventListener('scroll', e => {
    var wTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    //up
    if (wTop <= 0 || wTop < oldScroll) {
        $body.removeClass('hideHeader');
    } else {
        $body.addClass('hideHeader');
    }
  
    oldScroll = wTop;
  }, { passive: true });


//   banner-swiper
  var swiper = new Swiper(".bannerSwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

    // product-swiper

    var swiper = new Swiper(".productSwiper_1", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-1",
          prevEl: ".swiper-prev-1",
        },
      });
    var swiper = new Swiper(".productSwiper_2", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-2",
          prevEl: ".swiper-prev-2",
        },
      });
    var swiper = new Swiper(".productSwiper_3", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-3",
          prevEl: ".swiper-prev-3",
        },
      });
    var swiper = new Swiper(".productSwiper_4", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-4",
          prevEl: ".swiper-prev-4",
        },
      });
    var swiper = new Swiper(".productSwiper_5", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-5",
          prevEl: ".swiper-prev-5",
        },
      });
    var swiper = new Swiper(".productSwiper_6", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-6",
          prevEl: ".swiper-prev-6",
        },
      });
    var swiper = new Swiper(".productSwiper_7", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-7",
          prevEl: ".swiper-prev-7",
        },
      });
    var swiper = new Swiper(".productSwiper_8", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-8",
          prevEl: ".swiper-prev-8",
        },
      });
    var swiper = new Swiper(".productSwiper_9", {
        slidesPerView: 5,
        navigation: {
          nextEl: ".swiper-next-9",
          prevEl: ".swiper-prev-9",
        },
      });


      var numericInputs = document.querySelectorAll("[inputmode='numeric']");
      
      numericInputs.forEach((input) => {
        validateInput(input);
      });