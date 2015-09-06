
(function($, d){

  $(d).ready(function(){
    console.log('Flag 1');
    if($('#featured-posts-container')[0]){
      console.log('Flag 2');
      $('#featured-posts-container').ghostRelated({
          titleClass: '.my-title',
          tagsClass: '.my-tags-class'
      });

    }

  });

})(jQuery, document)