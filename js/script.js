
$(document).ready(function(){
    const swiper = new Swiper('.reviews__slider', {
        loop: true,
        pagination: {
            el: '.reviews__slider-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1.1,
              spaceBetween: 15
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2.2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3.08,
              spaceBetween: 30
            }
          }
    });
    setTimeout(function() {
        $(document).scrollTop(0)
    },0);
    $('.modalbox').fancybox({
        touch: false
    });

    var closeModal = document.querySelectorAll(".closeModal")

    closeModal.forEach(function(item) {
        item.addEventListener('click', function() {
            $.fancybox.close()
        })
    })

    $(".phoneMask").mask("+7 (999) 999-99-99");

    var modalForm = document.querySelector('.modal__form')
    var btnSuccessModal = document.querySelector('.btnSuccessModal')
    var appealForm = document.querySelector('.appeal__form')
    var btnSuccessAppeal = document.querySelector('.btnSuccessAppeal')

    btnSuccessAppeal.addEventListener("click", function(event) {
        event.preventDefault();
        var name = appealForm.querySelector('.name').value
        var phone = appealForm.querySelector('.phone').value
        if(phone.length >= 18 && phone !== '' && name !== '') {
                $.ajax({
                    url: "/submit.php",
                    type: "post",
                    data: {
                        name: name,
                        phone: phone,
                    },
                    success: function (e) {
                        $.fancybox.open({
                            src: '#modalSuccess',
                        })
                        appealForm.reset();
                    }
                });
            } else {
                console.log("error")
                $.fancybox.open({
                    src: '#modalError',
                })
            }
        })
        btnSuccessModal.addEventListener("click", function(event) {
            event.preventDefault();
            var name = modalForm.querySelector('.name').value
            var phone = modalForm.querySelector('.phone').value
            if(phone.length >= 18 && phone !== '' && name !== '') {
                    $.ajax({
                        url: "/submit.php",
                        type: "post",
                        data: {
                            name: name,
                            phone: phone,
                        },
                        success: function (e) {
                            $.fancybox.close()
                            $.fancybox.open({
                                src: '#modalSuccess',
                            })
                            modalForm.reset();
                        }
                    });
                } else {
                    $.fancybox.open({
                        src: '#modalError',
                    })
                }
            })
            
    
    
    
});


$(window).on('load', function () {
   
    if($(window).width() > 1024){
       var wow = new WOW({
        animateClass: 'wow animate__animated',
        mobile:false,
        offset: 100
    })
    
    }
    if($(window).width() > 1024) {
        $('.nav').addClass('wow animate__animated animate__fadeInDown').css({ animationDelay: '0.6s' });
        $('.header__title').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.header__subtitle').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1s' });
        $('.header__text').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1.2s' });
        $('.header__btn').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1.4s' });
        $('.info__content').eq(0).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.info__content').eq(1).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.info__content').eq(2).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1s' });
        $('.company__content').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.company__img').addClass('wow animate__animated animate__fadeIn').css({ animationDelay: '0.6s' });
        $('.services__title').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.services__subtitle').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.services__item').eq(0).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.services__item').eq(1).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.services__item').eq(2).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1.2s' });
        $('.services__item').eq(3).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.services__item').eq(4).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.services__item').eq(5).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1.2s' });
        $('.services__item').eq(6).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.services__item').eq(7).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.services__item').eq(8).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1.2s' });
        $('.stages__title').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.stages__item').eq(0).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.stages__item').eq(1).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '1s' });
        $('.stages__item').eq(2).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.stages__item').eq(3).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.experience__content').eq(1).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.experience__content').eq(2).addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.reviews__title').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.reviews__slider').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.reviews__slider-pagination').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.reviews__link').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.appeal__title').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.6s' });
        $('.appeal__subtitle').addClass('wow animate__animated animate__fadeInUp').css({ animationDelay: '0.8s' });
        $('.appeal__content').addClass('wow animate__animated animate__fadeIn').css({ animationDelay: '1s' });
        $('.footer__logo').addClass('wow animate__animated animate__fadeInLeft').css({ animationDelay: '0.6s' });
        $('.footer__content').addClass('wow animate__animated animate__fadeIn').css({ animationDelay: '0.6s' });
        $('.footer__contacts').addClass('wow animate__animated animate__fadeInRight').css({ animationDelay: '0.6s' });
        wow.init();
    }
});