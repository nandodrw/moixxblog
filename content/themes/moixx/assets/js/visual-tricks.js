'use strict';

(function(w, d, $){

  var setTop = true;

  var recomendedOfset;

  var recomendedMaxOfset;

  var postStart;

  var postEnd;

  function getNavBarTranslation(){
    var topDistance = 400;
    topDistance = topDistance - w.scrollY;
    if (topDistance < 0) {
      topDistance = 0;
    }
    return "translate3d(0, " + topDistance + "px, 0)";
  }

  function setTopNavbarStyle(){

    $('.main-nav').removeClass('floating');
    $('.main-nav').addClass('top');
    setTop = true;

  }

  function setFloatingNavar(){

    $('.main-nav').removeClass('top');
    $('.main-nav').addClass('floating');
    setTop = false;

  }

  function checkLocationPostList(){
    var location = w.location.pathname;

    if(location == '/') return true;

    if(location.indexOf('page/') == 1 ) return true;

    if(location.indexOf('tag/') == 1 ) return true;

    if(location.indexOf('author/') == 1 ) return true;

    return false;

  }

  $(w).scroll(function(){

    if(checkLocationPostList()){

      if(w.scrollY >= 350) {

          setTopNavbarStyle();

      } else {

          setFloatingNavar();
      }

    }

    if(recomendedOfset) {

      w.requestAnimationFrame(function(){

          if(w.scrollY >= recomendedOfset.top && w.scrollY < recomendedMaxOfset) {
            var additionalOffset = w.scrollY - recomendedOfset.top + 180;
            $('#recommended-content').css({
              'transform': 'translate3d(0px,  ' + additionalOffset +'px, 0px)'
            });
          } else if(w.scrollY < recomendedOfset.top) {
            $('#recommended-content').css({
              'transform': ' translate3d(0, 80px, 0)'
            });
          }

      });



    }

    if(postStart){
      var percentage = ((w.scrollY - postStart) / postEnd) * 100;
      percentage = percentage < 0 ? 0 : percentage;
      percentage = percentage > 100 ? 100 : percentage;
      $('.separator .reading-follow').css('width', percentage + '%');
    }

  });

  function calculateMovingMetrics(){
    recomendedOfset = $('#recommended-content').offset();


    var postOfset = $('#post-content').offset();
    var postHeight = $('#post-content').height();
    var recomendedHeight = $('#recommended-content').height();

    if(postOfset){
      postStart = postOfset.top;
      postEnd = postHeight;
    }

    if(postOfset && postHeight && recomendedHeight) {
      recomendedMaxOfset = postOfset.top + postHeight - recomendedHeight - 150;
    }

  }


  $(w).load(function() {
    calculateMovingMetrics();
  });

  $(d).ready(function(){

    $('#content').isotope({
      layoutMode: 'packery',
      itemSelector: '.post',
      percentPosition: true,
      packery: {
        gutter: '.gutter-sizer'
      }
    });

  });


  $('.btn').click(function(){
    if(this.dataset.link) {
      w.location.href = this.dataset.link;
    } else if (this.dataset.url){
      w.location.href = this.dataset.url;
    }
  });

  $(".category-link-list .btn").hover(function(){
    $('.thumb-category-list .thumb.' + this.dataset.ref).css("opacity", 1);
  },function(){
    $('.thumb-category-list .thumb.' + this.dataset.ref).css("opacity", "");
  });

  $(".share-buttom .share").hover(function(){
    $('.share-buttom').css("background-image", "url(/assets/images/social-buttom-share.png)");
  },function(){
    $('.share-buttom').css("background-image", "");
  });

  $(".share-buttom .like").hover(function(){
    $('.share-buttom').css("background-image", "url(/assets/images/social-buttom-like.png)");
  },function(){
    $('.share-buttom').css("background-image", "");
  });


  $('.post-go-up').click(function(){

    $('html, body').animate({
      scrollTop : 0
    }, 500);

  });




})(window, document, jQuery);