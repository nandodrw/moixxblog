'use strict';

(function(w, d, $){

  var setTop = true;

  function getNavBarTranslation(){
    var topDistance = 500;
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

    // $('.main-nav').css({
    //   "transform" : getNavBarTranslation,
    //   "-webkit-transform" : getNavBarTranslation,
    //   "-moz-transform" : getNavBarTranslation,
    //   "-ms-transform" : getNavBarTranslation,
    //   "-o-transform" : getNavBarTranslation
    // })

  }

  function setFloatingNavar(){

    $('.main-nav').removeClass('top');
    $('.main-nav').addClass('floating');
    setTop = false;

  }

  $(w).scroll(function(){

    if(w.location.pathname == '/'){

      if(w.scrollY >= 450) {

          setTopNavbarStyle();

      } else {

          setFloatingNavar();
      }

    }

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

  $('.post').click(function(){
    w.location.href = this.dataset.url;
  });

})(window, document, jQuery);