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
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-1",
          prevEl: ".swiper-prev-1",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_2", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-2",
          prevEl: ".swiper-prev-2",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_3", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-3",
          prevEl: ".swiper-prev-3",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_4", {
        slidesPerView: 5,
        spaceBetween: 10,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-4",
          prevEl: ".swiper-prev-4",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
        640: {
          slidesPerView: 2,
          
        },
        820: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
          
        },
        1280: {
          slidesPerView:5,
          spaceBetween: 5,
        },
      }
      });
    var swiper = new Swiper(".productSwiper_5", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-5",
          prevEl: ".swiper-prev-5",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_6", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-6",
          prevEl: ".swiper-prev-6",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_7", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-7",
          prevEl: ".swiper-prev-7",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_8", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-8",
          prevEl: ".swiper-prev-8",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });
    var swiper = new Swiper(".productSwiper_9", {
        slidesPerView: 5,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-next-9",
          prevEl: ".swiper-prev-9",
        },
        breakpoints: {
          320: {
          slidesPerView: 1,
          
        },
          640: {
            slidesPerView: 2,
            
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          850:{
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            
          },
          1280: {
            slidesPerView:5,
          }
      }
      });

// inner product swiper
if ('.product_page'.length > 1) {
  activateSwiper();
}

function activateSwiper() {
  var swiper = new Swiper(".innerSwiper", {
    effect: "fade",
    simulateTouch: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<a href="" class="' + className + '">' + (index + 1) + "</a>";
      },
    },
  });
}


$('.menu_icon').click(function(e){
  $('.menu').addClass('active')
  $('.top_nav').addClass('active')
});

$('.menu li').click(function(e){
  $('.menu').removeClass('active')
  $('.top_nav').removeClass('active')
  $('body').removeClass('hideHeader')
});

$('.inner_product .swiper-pagination-bullet').click(function(e){
  location.href = '#embroidery_products';
});