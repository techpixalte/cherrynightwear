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