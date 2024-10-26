'use strict';

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( !$nav.hasClass( open )) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);





$(document).ready(function () {
  $('#slider').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    arrows: false, // 矢印非表示
    pauseOnHover: false, // 
  });

  $(window).on("scroll", function () {
    if (300 < $(this).scrollTop()) {
      $("#news-container").fadeIn(1000);
    }
  });
  
  $(window).on("scroll", function () {
    if (700 < $(this).scrollTop()) {
      $("#shop-container").fadeIn(1000);
    }
  });
})



//ここから自分で追加した分　
$(document).ready(function() {
  // ハッシュが存在する場合の処理
  if (window.location.hash) {
      var target = $(window.location.hash);
      if (target.length) {
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 0);
      }
  }

  // スムーズスクロールの設定
  $('nav a').on('click', function(event) {
      var target = $(this).attr('href');
      if (target.startsWith('#')) {
          event.preventDefault();
          $(target).fadeIn(1000); // 対象要素を表示
          $('html, body').animate({
              scrollTop: $(target).offset().top
          }, 500);
      } else{ //ここから追加　10/17
        // 外部リンクの場合、一旦メニューを閉じてからページ遷移
        event.preventDefault();
        $('#navArea').removeClass('open');
        setTimeout(function() {
          window.location.href = target;
        }, 500); // 0.5秒後にページ遷移
      }
  });

  // ハンバーガーメニューのボタン処理
  $('.toggle_btn').on('click', function() {
    $('#navArea').toggleClass('open');
  });

  // マスクをクリックしたらハンバーガーメニューを閉じる
  $('#mask').on('click', function() {
    $('#navArea').removeClass('open');
  });
});


