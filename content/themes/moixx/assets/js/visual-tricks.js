'use strict';

(function(w, d, $){

  var setTop = true;

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

  $('.home-template .post').click(function(){
    w.location.href = this.dataset.url;
  });


  $('.btn').click(function(){
    w.location.href = this.dataset.link;
  });

  $(".category-link-list .btn").hover(function(){
    $('.thumb-category-list .thumb.' + this.dataset.ref).css("opacity", 1);
  },function(){
    $('.thumb-category-list .thumb.' + this.dataset.ref).css("opacity", "");
  });


})(window, document, jQuery);