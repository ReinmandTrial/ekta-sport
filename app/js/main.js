$('.js-simple-dropdown__head').on('click', function () {
   $(this).closest('.js-simple-dropdown').toggleClass('open');
})

// Поиск
$('.search').on('mouseover', function () {
   $(this).addClass('open');
})

$('.search__input').on('focus', function () {
   $(this).closest('.search').addClass('focus');
})

$('.search').on('mouseleave', function () {
   if (!$(this).find('.search__input').is(":focus")) {
      $(this).removeClass('open');
      $(this).removeClass('focus');
      $(this).find('.search__input').val('');
   }
})

$('.search__input').on('focusout', function () {
   $(this).closest('.search').removeClass('open');
   $(this).closest('.search').removeClass('focus');
   $(this).val('');
});

$('.js-search-panel-trigger').on('click', function () {
   // $(this).hide();
   $(this).closest('.js-search-panel-block').toggleClass('js-search-panel--open');
});
// Поиск конец

// Бургер
$('.burger-icon').on('click', function () {
   $('.burger').show();
});
$('.burger__close').on('click', function () {
   $('.burger').hide();
});
$(document).on('click', function (e) {
   if (!$(e.target).closest(".burger").length && !$(e.target).closest(".burger-icon").length) {
      $('.burger').hide();
   }
   e.stopPropagation();
});
// Бургер конец

// Выбор языка
$('.btn-popup-languages').on('click', function () {
   $('.languages').addClass('open');
})
$('.languages__country').on('click', function () {
   $('.languages__country').removeClass('active')
   $(this).addClass('active');
   $(this).closest('.languages__leftside').addClass('selected');
});
function langClose() {
   $('.languages').removeClass('open')
};
$('.languages__close, .popup-close').on('click', langClose);


$(document).on('click', function (e) {
   if (!$(e.target).closest(".languages").length && !$(e.target).closest(".btn-popup-languages").length) {

      langClose();
   }
   e.stopPropagation();
});
$('.languages__lang').on('click', function () {

   // if($('.languages__leftside').hasClass('selected')){
   $(this).addClass('active');
   // }
   setTimeout(langClose, 500)
});

if ($(window).width() < 768) {
   $('.languages__country').on('click', function () {
      $('.languages__rightside').addClass('open')
   });
}
// Выбор языка конец

// Поиск по элементам   
function searchForItems(filter, ul, li, max) {
   for (i = 0; i < li.length; i++) {
      var a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
         a.classList.add('show');

         if ($(window).width() < 992) {
            if (a.innerHTML.toUpperCase() == filter) {
               a.classList.add('active');

               a.getAttribute('href');
               console.log(a.getAttribute('href'));

               var btnToCounrty = document.querySelector(".world-map__btn-to-country");

               $('.world-map__btn-to-country').css('display', 'block');
               btnToCounrty.setAttribute("href", a.getAttribute('href'));

            } else {
               a.classList.remove('active');

            }
         }


      } else {
         a.classList.remove('show');
      }
   }

}
if ($('.wrapper').hasClass('page-main')) {
   var input, filter, ul, li, i, max;
   input = document.getElementById("search-contry-input");
   filter = input.value.toUpperCase();
   ul = document.getElementById("search-contry-results");
   li = ul.getElementsByTagName("a");
   max = 14;
   $('.world-map__results').find('.world-map__item.show').each(function (index) {
      console.log('filt');

      if (index >= max) {
         $(this).removeClass('show');
      } else {
         $(this).addClass('show');
      }
   })
}
$('#search-contry-input').keyup(function () {
   // alert('f')
   var input, filter, ul, li, i, max;
   input = document.getElementById("search-contry-input");
   filter = input.value.toUpperCase();
   ul = document.getElementById("search-contry-results");
   li = ul.getElementsByTagName("a");
   max = 14;
   searchForItems(filter, ul, li, i, max);
   $('.world-map__results').find('.world-map__item.show').each(function (index) {
      console.log('filt');

      if (index >= max) {
         $(this).removeClass('show');
      } else {
         $(this).addClass('show');
      }
   })
});

$('#search-lang-input').keyup(function () {

   var input, filter, ul, li, a, i;
   input = document.getElementById("search-lang-input");
   filter = input.value.toUpperCase();
   ul = document.getElementById("search-lang-results");
   li = ul.getElementsByTagName("button");

   searchForItems(filter, ul, li, i);
});



if ($(window).width() < 992) {
   $('.world-map__item').on('click', function () {

      link = $(this).attr('href');
      // console.log(link);

      $(this).closest('.world-map__nav').find('.world-map__btn-to-country').css('display', 'block');
      $(this).closest('.world-map__nav').find('.world-map__btn-to-country').attr('href', link);

      return false;
   })
}
// Поиск по элементам конец

// промокод
$('.js-promocode').on('click', function () {
   if ($(this).is(':checked')) {
      $(this).closest('.input__block--promocode').find('.input__box').show();
   } else {
      $(this).closest('.input__block--promocode').find('.input__box').hide();
   }
})
// промокод конец

// dropdowns
$('.js-select-head').on('click', function (e) {
   var btn = $(this);
   var block = btn.closest(".js-select");

   if (!$(e.target).closest(" .js-select-head .js-select-item, .js-select-head .js-select-item--country").length) {
      if (!block.hasClass('open')) {
         $('.js-select').removeClass('open');
      }
      block.toggleClass('open');
   }
});
$(document).on('click', function (e) {
   if (!$(e.target).closest(".js-select").length) {
      $('.js-select').not('.js-simple-select').removeClass('open');
   }
   e.stopPropagation();
});

$('.js-select--swich .js-select-body .js-select-item').on('click', function () {
   btn = $(this);
   block = btn.closest('.js-select');
   thisText = btn.text();

   block.toggleClass('open');
   block.find('.js-select-head p').text(thisText);
   block.find('.js-select-head input').val(thisText);
   $(this).closest('.input__block').addClass('--fill');
});


$('.js-select--country .js-select-body--country .js-select-item--country, input__several-item').on('click', function () {
   btn = $(this);
   block = btn.closest('.js-select');

   block.find('.input').hide();
   block.find('.input.input--filled').css('display', 'flex');

   btn.clone().appendTo(block.find('.input--filled'))

   block.toggleClass('open');
   $(this).closest('.input__block').addClass('--fill');
});

$('.input__select-item-close').on('click', function () {
   var count = 0;
   $($('.input.input--filled').find('.input__select-item')).each(function () {
      count++;
   })
   console.log(count);

   if (count <= 1) {
      block.find('.input').show();
      block.find('.input.input--filled').css('display', 'none');
      block.closest('.input__block').removeClass('--fill');
   }
   $(this).closest('.input__select-item').remove();
});
$('body').on('click', '.input__select-item-close', function () {

   var count = 0;
   $($('.input.input--filled').find('.input__select-item')).each(function () {
      count++;
   })
   if (count <= 1) {
      block.find('.input').show();
      block.find('.input.input--filled').css('display', 'none');
      block.closest('.input__block').removeClass('--fill');
   }
   $(this).closest('.input__select-item').remove();
});

$('input.input').on('click keyup', function () {
   if ($(this).val() != '') {
      $(this).closest('.input__block').addClass('--fill');
   } else {
      $(this).closest('.input__block').removeClass('--fill');

   }
})


// $('.js-select--swich .js-select-several .js-select-item').on('click', function () {
//    btn = $(this);
//    block = btn.closest('.js-select--swich');
//    thisText = btn.text();

//    block.find('.js-select-head p').text(thisText);
//    block.find('.js-select-head input').val(thisText);
// });
// dropdowns end

// плавная прокрутка якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}
//плавная прокрутка якоря конец

// custon scroll
// new SimpleBar(document.getElementById('scroll-popup-read-more'));
// new SimpleBar($('js-scroll'));

// custon scroll end


// действия в форме полиса
$('.form-policy__btn-to-step-two').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-one').hide();
   $(this).closest('.form-policy').find('.form-policy__step-two').show();
   $('.policy-form__steps').removeClass('policy-form__steps--one')
   $('.policy-form__steps').addClass('policy-form__steps--two')
   $(this).closest('.policy-form').addClass('fixed');
   $(this).closest('.policy-form').find('.form-policy__num-of-step span').text('2')
});
$('.form-policy__btn-prev-to-step-one').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-two').hide();
   $(this).closest('.form-policy').find('.form-policy__step-one').show();
   $('.policy-form__steps').removeClass('policy-form__steps--two')
   $('.policy-form__steps').addClass('policy-form__steps--one')
   $(this).closest('.policy-form').removeClass('fixed')
   $(this).closest('.policy-form').find('.form-policy__num-of-step span').text('1')
});

$('.form-policy__btn-to-step-three').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-two').hide();
   $(this).closest('.form-policy').find('.form-policy__step-three').show();
});
$('.form-policy__btn-prev-to-step-two').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-three').hide();
   $(this).closest('.form-policy').find('.form-policy__step-two').show();
});
$('.form-policy__btn-to-step-four').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-three').hide();
   $(this).closest('.form-policy').find('.form-policy__step-four').show();
});
$('.form-policy__btn-prev-to-step-three').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-four').hide();
   $(this).closest('.form-policy').find('.form-policy__step-three').show();
});
$('.form-policy__btn-to-step-five').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-four').hide();
   $(this).closest('.form-policy').find('.form-policy__step-five').show().addClass('active');
   $('.policy-form__steps').removeClass('policy-form__steps--two')
   $('.policy-form__steps').addClass('policy-form__steps--three')
   $(this).closest('.policy-form').find('.form-policy__num-of-step span').text('3')
});

$('.form-policy__include-item').on('click', function () {
   if ($(this).find('.checkbox-none').is(':checked')) {
      $(this).addClass('active');
   } else {
      $(this).removeClass('active');
   }
})
$('.tariff__item--start').on('click', function () {
   $('.tariff__item--standart').removeClass('active');
   $('.tariff__item--max').removeClass('active');
   $('.tariff__item--start').addClass('active');
});
$('.tariff__item--standart').on('click', function () {
   $('.tariff__item--start').removeClass('active');
   $('.tariff__item--max').removeClass('active');
   $('.tariff__item--standart').addClass('active');
});
$('.tariff__item--max').on('click', function () {
   $('.tariff__item--standart').removeClass('active');
   $('.tariff__item--start').removeClass('active');
   $('.tariff__item--max').addClass('active');
});

$(".form-policy__toggle-item").on('click', function () {
   if (!$(this).hasClass("active")) {
      let btns = $(this).closest(".form-policy__toggle").find(".form-policy__toggle-item");
      let count;
      $(btns).each(function () {
         $(this).removeClass("active");
      })

      $(this).addClass("active");

      $(btns).each(function (index) {
         if ($(this).hasClass("active")) {
            count = index;
         }
      })

      let blocks = $('.form-policy__toggle-body').find('.form-policy__toggle-item-body');

      $(blocks).each(function (index) {
         if (index == count) {
            $(this).addClass("active");
         } else {
            $(this).removeClass("active");
         }
      })
   }

})





// Туристы старт
$('.js-add-tourist').on('click', function () {
   var btn = $(this);
   if (btn.hasClass('js-add-tourist-block')) {
      btn.closest('.form-policy').find('.form-policy__participants').show();
      btn.removeClass('js-add-tourist-block');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });
   } else {
      btn.closest('.form-policy').find('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });
   }
});

$(document).on('click', '.form-policy__close', function () {
   var btn = $(this);
   btn.closest('.form-policy__tourist').remove();
   $('.form-policy__tourist').find('.num').val('');
   $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
      $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
   });
   var count = 0;
   $($(document).find('.form-policy__tourist')).each(function () {
      count++;
   })
   if (count <= 1) {
      $('.form-policy__participants').hide();
      $('.js-add-tourist').addClass('js-add-tourist-block');
      $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });
   }
});

// Туристы конец


// действия в форме полиса конец

// Календарь
var nowDate = new Date();
var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
$('input[name="daterange"], .daterangepicker').on('focus', function () {
   $(this).closest('.js-calendar').addClass('open');
   $(this).daterangepicker({
      opens: 'right',
      "linkedCalendars": false,
      "autoApply": true,
      "parentEl": ".js-calendar",
      "showCustomRangeLabel": false,
      "minDate": today,
      "locale": {
         "format": "DD.MM.YYYY",
         "separator": " - ",
         "applyLabel": "Apply",
         "cancelLabel": "Cancel",
         "fromLabel": "From",
         "toLabel": "To",
         "customRangeLabel": "Custom",
         "weekLabel": "W",
         "daysOfWeek": [
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб",
            "Вс"
         ],
         "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
         ],
         "firstDay": 1,
         "dateLimit": {
            "month": 1
         },
      },
   }, function (start, end, label) {
      console.log("A new date selection was made: " + start.format('DD.MM.YYYY') + ' to ' + end.format('DD.MM.YYYY'));
   });
});



$('input[name="daterange-one"], .daterangepicker').on('focus', function () {
   $(this).closest('.js-calendar').addClass('open');
   $(this).closest('.input__block').addClass('--fill');
   $(this).daterangepicker({
      singleDatePicker: true,
      opens: 'right',
      "linkedCalendars": false,
      "autoApply": true,
      "parentEl": ".js-calendar",
      "showCustomRangeLabel": false,
      "minDate": today,
      autoUpdateInput: false,
      "locale": {
         "format": "DD.MM.YYYY",
         "separator": " - ",
         "applyLabel": "Apply",
         "cancelLabel": "Cancel",
         "fromLabel": "From",
         "toLabel": "To",
         "customRangeLabel": "Custom",
         "weekLabel": "W",
         "daysOfWeek": [
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб",
            "Вс"
         ],
         "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
         ],
         "firstDay": 1,
         "dateLimit": {
            "month": 1
         },
      },
   },
      function (start) {
         $('input[name="daterange-one"]').val(start.format('DD.MM.YYYY') + ' - ' + start.add(1, "months").format('DD.MM.YYYY'));
      });
});
$('input[name="daterange-two"], .daterangepicker').on('focus', function () {
   $(this).closest('.js-calendar').addClass('open');
   $(this).closest('.input__block').addClass('--fill');
   $(this).daterangepicker({
      singleDatePicker: true,
      opens: 'right',
      "linkedCalendars": false,
      "autoApply": true,
      "parentEl": ".js-calendar",
      "showCustomRangeLabel": false,
      "minDate": today,
      autoUpdateInput: false,
      "locale": {
         "format": "DD.MM.YYYY",
         "separator": " - ",
         "applyLabel": "Apply",
         "cancelLabel": "Cancel",
         "fromLabel": "From",
         "toLabel": "To",
         "customRangeLabel": "Custom",
         "weekLabel": "W",
         "daysOfWeek": [
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб",
            "Вс"
         ],
         "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
         ],
         "firstDay": 1,
         "dateLimit": {
            "month": 1
         },
      },
   }, function (start) {
      $('input[name="daterange-two"]').val(start.format('DD.MM.YYYY') + ' - ' + start.add(1, "years").format('DD.MM.YYYY'));
   });
});
$('input[name="daterange"],input[name="daterange-one"],input[name="daterange-two"], .daterangepicker').on('blur', function () {
   $(this).closest('.js-calendar').removeClass('open');
   $(this).closest('.input__block').addClass('--fill');
});
// Календарь конец

$('.form-policy__include-btn-more').on('click', function () {
   $(this).closest('.form-policy__include-wrapper').toggleClass('open');
})

// Попап
$('.btn-popup-type-of-rest').on('click', function () {
   $('.popup-type-of-rest').fadeIn();
});
$('.btn-popup-write-to-us').on('click', function () {
   $('.popup-write-to-us').fadeIn();
});
$('.btn-popup-sms').on('click', function () {
   $('.popup-sms').fadeIn();
});
$('.btn-popup-phone').on('click', function () {
   $('.popup-phone').fadeIn();
});
$('.btn-popup-message').on('click', function () {
   $('.popup-message').fadeIn();
});
//нажатие вне body
$(document).on('click', function (e) {
   if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length && !$(e.target).closest(".popup-message__content").length) {
      $('.popup').fadeOut();
   }
   e.stopPropagation();
});
$('.popup-close').on('click', function () {
   $('.popup').fadeOut();
})
//нажатие вне body
// Попап конец

// Слайдеры

if ($(window).width() <= 1210) {

   new Swiper('.slider-most-interesting', {
      slidesPerView: 'auto',
   })
   new Swiper('.slider-reviews', {
      slidesPerView: 'auto',
   })
   new Swiper('.slider-tariffs', {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 1,
      breakpoints: {
         768: {
            spaceBetween: 15,
         },
         320: {
            spaceBetween: 20,
         }
      },
   })
   new Swiper('.blog-slider', {
      slidesPerView: 'auto',
   })
}
$('.article-img-slider__slide-img img').each(function () {
   var imgWidth = $(this).closest('.article-img-slider__slide').css('width');
   // alert('h')
   console.log(imgWidth);
   $(this).closest('.article-img-slider__slide').find('.article-img-slider__slide-img img').css('width', imgWidth);

})

// new Swiper('.article-img-slider', {
//    slidesPerView: 'auto',
//    // centeredSlides: true,
//    // initialSlide: 1,
//    // autoHeight: true,
//    spaceBetween: 20,
//    navigation: {
//       nextEl: elem.nextElementSibling.nextElementSibling,
//       prevEl: elem.nextElementSibling,
//    },
//    // breakpoints: {
//    //    768: {
//    //       spaceBetween: 15,
//    //    },
//    //    320: {
//    //       spaceBetween: 20,
//    //    }
//    // },
// })
document.querySelectorAll('.article-img-slider__container').forEach(function (elem) {
   new Swiper(elem, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
         nextEl: elem.nextElementSibling.nextElementSibling,
         prevEl: elem.nextElementSibling,
      }
   });
});
new Swiper('.slider-partners ', {
   slidesPerView: 'auto',
   spaceBetween: 60,
   loop: true,
   freeMode: true,
   speed: 20000,
   waitForTransition: false,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   breakpoints: {
      992: {
         speed: 20000,
      },
      768: {
         spaceBetween: 60,
         speed: 25000,
      },
      320: {
         spaceBetween: 0,
      }
   },
})


// Слайдеры конец

$('.post__btn-more').on('click', function () {
   $(this).closest('.post').find('.post__item--hide').show();
   $(this).closest('.post').find('.post__btn-roll-up').show();
   $(this).hide();
})
$('.post__btn-roll-up').on('click', function () {
   $(this).closest('.post').find('.post__item--hide').hide();
   $(this).closest('.post').find('.post__btn-more').show();
   $(this).hide();
})

$('.accodion__head').on('click', function () {
   var block = $(this).closest('.accodion');
   $('.accodion').not(block).removeClass('open').find('.accodion__body').slideUp();
   if (!block.hasClass('open')) {
      block.addClass('open').find('.accodion__body').slideDown();
   } else {
      block.removeClass('open').find('.accodion__body').slideUp();

   }
})

$('.card-tariff__item-head').on('click', function () {
   $(this).closest('.card-tariff__item').toggleClass('open');
   $(this).closest('.card-tariff__item').find('.card-tariff__item-icon').toggleClass('icon-plus-circle');
   $(this).closest('.card-tariff__item').find('.card-tariff__item-icon').toggleClass('icon-minus-circle');
})

$('.card-tariff__pointer').on('click', function () {
   $('.card-tariff__content').slideDown();
   $('.card-tariff__hide').css('display', 'block');
   $('.card-tariff__pointer').slideUp();
   $('.card-tariff__short-info').slideUp();
})
$('.card-tariff__hide').on('click', function () {
   $(this).closest('.banner__content').find('.card-tariff__content').slideUp();
   $(this).closest('.banner__content').find('.card-tariff__pointer').slideDown();
   $(this).closest('.banner__content').find('.card-tariff__short-info').slideDown();
   $(this).closest('.banner__content').find('.card-tariff__hide').slideUp();

})

$(".countries-tabs__head-item").on('click', function () {
   // aleft('l')
   if (!$(this).hasClass("active")) {
      let btns = $(this).closest(".countries-tabs").find(".countries-tabs__head-item");
      let count;
      $(btns).each(function () {
         $(this).removeClass("active");
      })

      $(this).addClass("active");

      $(btns).each(function (index) {
         if ($(this).hasClass("active")) {
            count = index;
         }
      })

      let blocks = $('.countries-tabs__body').find('.countries-tabs__body-item');

      $(blocks).each(function (index) {
         if (index == count) {
            $(this).addClass("active");
         } else {
            $(this).removeClass("active");
         }
      })
   }

})

// calculator start
$('.form-calculator__policy-includes-btn-show').on('click', function () {
   $('.form-calculator__policy-includes-descr-short').hide();
   $('.form-calculator__policy-includes-descr-full').show();
   $('.form-calculator__policy-includes-btn-show').hide();
   $('.form-calculator__policy-includes-btn-hide').css('display', 'flex');
})
$('.form-calculator__policy-includes-btn-hide').on('click', function () {
   $('.form-calculator__policy-includes-descr-full').hide();
   $('.form-calculator__policy-includes-descr-short').show();
   $('.form-calculator__policy-includes-btn-hide').hide();
   $('.form-calculator__policy-includes-btn-show').css('display', 'flex');
})

// $('.form-calculator__check-item-head .checkbox').on('click', function () {
//    if ($(this).find('.checkbox-none').prop("checked", true)) {
//       $(this).closest('.form-calculator__check-block').find('.form-calculator__check-block-body .checkbox-none').prop("checked", true)
//    } else if ($(this).find('.checkbox-none').prop("checked", false)) {
//       alert('j')
//       $(this).closest('.form-calculator__check-block').find('.form-calculator__check-block-body .checkbox-none').prop("checked", false)
//    }
// })

$('.form-calculator__show-all').on('click', function () {
   $($(this).closest('.form-calculator__body').find('.form-calculator__check-block')).each(function () {
      $(this).addClass('open');

   })
   $(this).hide();
   $('.form-calculator__hide-all').show();
})
$('.form-calculator__hide-all').on('click', function () {
   $($(this).closest('.form-calculator__body').find('.form-calculator__check-block')).each(function () {
      $(this).removeClass('open');
   })
   $(this).hide();
   $('.form-calculator__show-all').show();
})

// $('.form-calculator__check-block .checkbox').on('click', function () {
//    $(this).closest('.form-calculator').find('.form-calculator__addition').show();
// })
// $('.form-calculator__input .input__select-item, .form-calculator__input .js-calendar-head').on('click', function () {
//    $(this).closest('.form-calculator').find('.form-calculator__calc-peoples-prev').show();
//    $(this).closest('.form-calculator').find('.form-calculator__details').show();
//    $(this).closest('.form-calculator').find('.form-calculator__calc-peoples').show();
//    $(this).closest('.form-calculator').find('.form-calculator__list-all').hide();
// })

$('.form-calculator__btn-to-step-two').on('click', function () {
   // $(this).closest('.form-calculator').find('.form-calculator__step-three').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-one').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-two').show();
   $('.form-calculator__btn-edit-step-one').show();
   $(this).closest('.form-calculator').find('.form-calculator__calc-peoples-prev').show();
   $(this).closest('.form-calculator').find('.form-calculator__details').show();
   $(this).closest('.form-calculator').find('.form-calculator__calc-peoples').show();
   $(this).closest('.form-calculator').find('.form-calculator__list-all').hide();
   $(this).closest('.form-calculator').find('.form-calculator__addition').show();
})
$('.form-calculator__btn-to-step-three').on('click', function () {
   // $(this).closest('.form-calculator').find('.form-calculator__step-three').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-two').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-three').show();
   $('.form-calculator__btn-edit-step-one').show();
})
$('.form-calculator__btn-edit-step-one').on('click', function () {
   $(this).closest('.form-calculator').find('.form-calculator__step-two').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-three').hide();
   $(this).closest('.form-calculator').find('.form-calculator__step-one').show();
   $('.form-calculator__btn-edit-step-one').hide();
})

$('.form-calculator__check-block-head .checkbox').on('click', function checkForm() {
   var checkBlock = $(this).closest('.form-calculator__check-block');

   if ($(this).find('.checkbox-none').prop('checked') && !checkBlock.hasClass('check-all')) {
      $(checkBlock.find('.form-calculator__check-block-body .checkbox-none')).each(function () {
         $(this).prop('checked', true).addClass('disabled');

      })
      checkBlock.addClass('check-all')
      // checkBlock.find('.form-calculator__check-block-body .checkbox-none').prop('checked')
   }
   else {
      $(checkBlock.find('.form-calculator__check-block-body .checkbox-none')).each(function () {
         $(this).prop('checked', false).removeClass('disabled');

      })
      checkBlock.removeClass('check-all')
   }
})
$('.form-calculator__check-block-body .checkbox-none').on('click', function () {
   var checkBlock = $(this).closest('.form-calculator__check-block');

   if (checkBlock.find('.form-calculator__check-block-body .checkbox-none').length === checkBlock.find('.form-calculator__check-block-body .checkbox-none:checked').length) {


      checkBlock.find('.form-calculator__check-block-head .checkbox-none').prop('checked', true);
      checkBlock.addClass('check-all')
      $(checkBlock.find('.form-calculator__check-block-body .checkbox-none')).each(function () {
         $(this).prop('checked', true).addClass('disabled');

      })
   } else {

      checkBlock.find('.form-calculator__check-block-head .checkbox-none').prop('checked', false);
      checkBlock.removeClass('check-all')
      $(checkBlock.find('.form-calculator__check-block-body .checkbox-none')).each(function () {
         $(this).removeClass('disabled');

      })
   }
})

// туристы
$('.js-add-tourist').on('click', function () {
   var btn = $(this);
   if (btn.hasClass('js-add-tourist-block2')) {
      btn.closest('.form-calculator').find('.form-policy__participants').show();
      btn.removeClass('js-add-tourist-block2');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });

      $('.js-input-wrapper-to-hide').each(function () {
         $(this).addClass('closed');
         $(this).find('input').prop('disabled', true);
      })
      $('.form-policy__tourist:last-child').removeClass('closed');
      $('.form-policy__tourist:last-child').find('input').prop('disabled', false);
      $('.form-calculator__step-two').addClass('some-hide');
   } else {
      btn.closest('.form-calculator').find('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });

      $('.js-input-wrapper-to-hide').each(function () {
         $(this).addClass('closed');
         $(this).find('input').prop('disabled', true);
      })
      $('.form-policy__tourist:last-child').removeClass('closed');
      $('.form-policy__tourist:last-child').find('input').prop('disabled', false);
   }
});

$(document).on('click', '.form-calculator__edit-this', function () {
   $('.js-input-wrapper-to-hide').each(function () {
      $(this).addClass('closed');
      $(this).find('input').prop('disabled', true);
   })
   $(this).closest('.js-input-wrapper-to-hide').removeClass('closed');
   $(this).closest('.js-input-wrapper-to-hide').find('input').prop('disabled', false);
})

$(document).on('click', '.form-calculator__delete-this', function () {
   var btn = $(this);
   btn.closest('.form-policy__tourist').remove();
   $('.form-policy__tourist').find('.num').val('');
   $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
      $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
   });
   var count = 0;
   $($(document).find('.form-policy__tourist')).each(function () {
      count++;
   })
   if (count <= 1) {
      $('.form-policy__participants').hide();
      $('.js-add-tourist').addClass('js-add-tourist-block');
      $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
      $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });
   }
});
// calculator end


var _Seconds;

//ВВод в инпут номер страхового полиса 
$('.js-input-track').on('keyup', function () {
   var val = $(this).val();
   if (val != '') {
      $('.js-btn-track').prop('disabled', false);
   } else {
      $('.js-btn-track').prop('disabled', true);
   }
});
//ВВод в инпут номер страхового полиса конец

$('.js-btn-track').on('click', function () {
   $('.check-policy__details').show();
})

//ВВод в инпут номер паспорта
$('.js-input-pasport').on('keyup', function () {
   var val = $(this).val();
   if (val != '') {
      $('.btn-popup-sms').prop('disabled', false);
   } else {
      $('.btn-popup-sms').prop('disabled', true);
   }
});
//ВВод в инпут номер паспорта конец


//Ввод в инпут код подтверждения
$('.js-input-sms').on('keyup', function () {
   var val = $(this).val();
   if (val != '') {
      $('.js-btn-sms').prop('disabled', false);
   } else {
      $('.js-btn-sms').prop('disabled', true);
   }
});

$('.js-btn-sms').on('click', function () {
   $('.popup-sms').fadeOut();
   $('.check-policy__info').show();
   $('.check-policy__details').hide();
})
//Ввод в инпут код подтверждения конец

$('.blog-sidebar-dropd-large__icon').on('click', function () {
   $(this).closest('.blog-sidebar-dropd-large').toggleClass('open');
})
$('.blog-sidebar-dropd-small__icon').on('click', function () {
   $(this).closest('.blog-sidebar-dropd-small').toggleClass('open');
})

// stars
$('.js-star-item').mouseover(function () {
   count = 0;
   var i = 0;
   var j = 0;
   var thisParent = $(this).closest('.js-star-block');
   var thisItem = thisParent.find('.js-star-item');

   $(thisItem).each(function () {
      if ($(this).hasClass('active')) {
         count++;
      }
   })
   $(thisItem).each(function () {
      $(this).removeClass('active');
   })
   $(this).addClass('js-prov');
   $(thisItem).each(function () {
      $(this).removeClass('js-hover');
   })
   $(thisItem).each(function (index) {
      if ($(this).hasClass('js-prov')) {
         i = index;
      }
   })
   $(thisItem).each(function (index) {
      if (index < i + 1) {
         $(this).addClass('js-hover');
      }
   })
})
$('.js-star-item').mouseout(function () {
   var thisParent = $(this).closest('.js-star-block');
   var thisItem = thisParent.find('.js-star-item');

   $(this).removeClass('js-prov');
   $(thisItem).each(function () {
      $(this).removeClass('js-hover');
   })
   $(thisItem).each(function (index) {
      if (index < count) {
         $(this).addClass('active');
      }
   })
})
$('.js-star-item').on('click', function () {
   var count_star = 0;
   count = 0;
   var i = 0;
   var thisParent = $(this).closest('.js-star-block');
   var thisItem = thisParent.find('.js-star-item');
   $(this).addClass('active');
   $(thisItem).each(function (index) {
      if ($(this).hasClass('active')) {
         i = index;
      }
   })
   $(thisItem).each(function () {
      $(this).removeClass('active');
   })
   $(thisItem).each(function (index) {
      if (index < i + 1) {
         $(this).addClass('active');
         count_star++;
      }
   })
});
// stars end

$('.item-faq__btn-answer').on('click', function () {
   $(this).closest('.item-faq').addClass('active');
})



