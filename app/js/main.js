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
$('.languages__close').on('click', langClose);
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
function searchForItems(filter, ul, li) {
   for (i = 0; i < li.length; i++) {
      var a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
         a.classList.add('show');
         if (ul.classList.contains('js-not-for-all')) {
            if (i > max) {
               a.classList.remove('show');
            } else {
               a.classList.add('show');
            }
         }
      } else {
         a.classList.remove('show');
      }
   }
}

$('#search-lang-input').keyup(function () {

   var input, filter, ul, li, a, i;
   input = document.getElementById("search-lang-input");
   filter = input.value.toUpperCase();
   ul = document.getElementById("search-lang-results");
   li = ul.getElementsByTagName("button");
   searchForItems(filter, ul, li, i);
});

$('#search-contry-input').keyup(function () {
   // alert('f')
   var input, filter, ul, li, i, max;
   input = document.getElementById("search-contry-input");
   filter = input.value.toUpperCase();
   ul = document.getElementById("search-contry-results");
   li = ul.getElementsByTagName("a");
   max = 15;

   searchForItems(filter, ul, li, i, max);
});
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
$('.js-select-head').on('click', function () {
   var btn = $(this);
   var block = btn.closest(".js-select");

   if (!block.hasClass('open')) {
      $('.js-select').removeClass('open');
   }
   block.toggleClass('open');
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
});
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


// действия в форме полиса
$('.form-policy__btn-to-step-two').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-one').hide();
   $(this).closest('.form-policy').find('.form-policy__step-two').show();
   $('.policy-form__steps').removeClass('policy-form__steps--one')
   $('.policy-form__steps').addClass('policy-form__steps--two')
});
$('.form-policy__btn-prev-to-step-one').on('click', function () {
   $(this).closest('.form-policy').find('.form-policy__step-two').hide();
   $(this).closest('.form-policy').find('.form-policy__step-one').show();
   $('.policy-form__steps').removeClass('policy-form__steps--two')
   $('.policy-form__steps').addClass('policy-form__steps--one')
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

$('input[name="daterange"], .daterangepicker').on('focus', function () {
   $(this).closest('.js-calendar').addClass('open')
   $(this).daterangepicker({
      opens: 'right',
      "linkedCalendars": false,
      "autoApply": true,
      "parentEl": ".js-calendar",
      "showCustomRangeLabel": false,
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
         "firstDay": 1
      },
   }, function (start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
   });
});
$('input[name="daterange"], .daterangepicker').on('blur', function () {
   $(this).closest('.js-calendar').removeClass('open')
});
// Календарь конец

$('.form-policy__include-btn-more').on('click', function () {
   $(this).closest('.form-policy__include-wrapper').toggleClass('open');
})

// Попап
$('.btn-popup-type-of-rest').on('click', function () {
   $('.popup-type-of-rest').fadeIn();
});
//нажатие вне body
$(document).on('click', function (e) {
   if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
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

if ($(document).width() <= 1210) {

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
}
new Swiper('.slider-partners ', {
   slidesPerView: 'auto',
   spaceBetween: 60,
   loop: true,
   autoplay: {
      delay: 3250,
      disableOnInteraction: false,
   },
   breakpoints: {
      768: {
         spaceBetween: 60,
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