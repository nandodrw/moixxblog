
(function($, d){

  $(d).ready(function(){

    $('#sub-list').click(function(){

      var url = 'http://corporaciontextil.us11.list-manage1.com/subscribe?u=640a49de720704dbcf6c86775&id=31a67406f5'

      window.open(url + '&MERGE0='+ $('#sub-email').val(), '_blank');

    });

    $('#sub-list-nav').click(function(){

      var url = 'http://corporaciontextil.us11.list-manage1.com/subscribe?u=640a49de720704dbcf6c86775&id=31a67406f5'

      window.open(url, '_blank');

    });

  });



})(jQuery, document)