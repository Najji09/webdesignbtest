$(document).ready(function () {
  $('nav ul li').mouseenter(function () {
    $(this).children('ul').stop().slideDown();
  });
  $('nav ul li').mouseleave(function () {
    $(this).children('ul').stop().slideUp();
  });
  setInterval(function () {
    $('main ul').animate(
      {
        top: '-300px',
      },
      function () {
        $('main ul').append($('main ul li').eq(0));
        $('main ul').css('top', '0');
      }
    );
  }, 3000);
  $('dl dt').click(function () {
    $('dl').removeClass('on');
    $('dl').addClass('no');
    $(this).parent('dl').addClass('on');
    $(this).parent('dl').removeClass('no');
  });
  $('.popup').click(function () {
    $('#popup_wrap').css('display', 'block');
  });
  $('.close').click(function () {
    $('#popup_wrap').css('display', 'none');
  });
});
