'use strict';

(function(w, d, $){

  var setTop = true;

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

  $(w).scroll(function(){

    if(w.scrollY < 100) {
      if(!setTop){
        setTopNavbarStyle();
      }
    } else {
      if(setTop){
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