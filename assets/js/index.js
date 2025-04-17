$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
    nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

$(document).ready(function () {
  var $lightbox = $('#lightbox');

  $('[data-target="#lightbox"]').on('click', function (event) {
    var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt'),
      css = {
        'maxWidth': $(window).width() - 100,
        'maxHeight': $(window).height() - 100
      };

    $lightbox.find('.close').addClass('hidden');
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });

  $lightbox.on('shown.bs.modal', function (e) {
    var $img = $lightbox.find('img');

    $lightbox.find('.modal-dialog').css({
      'width': $img.width()
    });
    $lightbox.find('.close').removeClass('hidden');
  });
});

var conf_name = "institutnude.com";
var conf_email = "institutnude@yahoo.com";
var modal_rgpd = '<div class="modal fade" id="modal-rgpd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
  '        <div class="modal-dialog" role="document">' +
  '            <div class="modal-content">' +
  '                <div class="modal-body">' +
  '                  * En cochant cette case, j’accepte que mes données personnelles soient collectées et traitées par le service commercial de ' + conf_name + '.' +
  '                   Leur traitement a pour finalité de traiter votre demande spécifique.<br>' +
  '                   Les données collectées sont conservées pour la durée de nos relations commerciales + 1 an. Conformément à la loi' +
  '                   « informatique et libertés », vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier' +
  '                   auprès de notre référent à <a href="mailto:"' + conf_email + '">' + conf_email + '</a>.<br>' +
  '                   Vous disposez également d’un droit de rectification, à l’oubli, à la portabilité, de limitation ou d’opposition auprès de notre référent à ' +
  '                   <a href="mailto:' + conf_email + '">' + conf_email + '</a>.<br><br>' +
  '                   En dernier recours, vous pouvez déposer une réclamation auprès de la CNIL.' +
  '                </div>' +
  '                <div class="modal-footer">' +
  '                    <div class="form-group text-center">' +
  '                        <button type="button" class="button1" data-dismiss="modal"><span class="txt">fermer</span></button>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '        </div>' +
  '    </div>';
$(document).ready(function () {
  $(".info-rgpd label").after(function () {
    return '&nbsp;<a href="#" data-toggle="modal" data-target="#modal-rgpd"><i class="fa fa-info-circle"></i></a>' + modal_rgpd;
  });
});

// new WOW().init();

$(window).scroll(function () {
  if ($(document).scrollTop() > 350) {
    $(".backTotop").addClass('active1');
  } else {
    $(".backTotop").removeClass('active1');
  }
});

$('a[href^="#backTotop"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top
  }, 'slow');
  return false;
});

// $('.count').counterUp({
//   delay: 10,
//   time: 2000
// });

window.onscroll = function () {
  myFunction()
};
var header = document.getElementById("menu2");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixmenu");

  } else {
    header.classList.remove("fixmenu");
  }
}

$('.carousel3').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
$('.carousel4').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})



window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-157593544-1');