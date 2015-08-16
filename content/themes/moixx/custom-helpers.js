var hbs = require('express-hbs');


function videoUrl(item, options) {

  // var tagString = "";

  // var re = /\w+(?=\$)/g;

  // for (var i = item.length - 1; i >= 0; i--) {
  //   tagString += item[i].name + ", "
  // };

  // var resultRegx = re.exec(tagString)

  // if(resultRegx){

  //   return new options.fn(resultRegx[0]);
  // }
  return new options.fn("");

}

function checkVideo(item, options) {

  // var tagString = "";

  // var re = /\w+(?=\$)/g;

  // for (var i = item.length - 1; i >= 0; i--) {
  //   tagString += item[i].name + ", "
  // };

  // var resultRegx = re.exec(tagString)

  // if(resultRegx && resultRegx[0]){

  //   return options.fn(this);

  // }
  return options.inverse(this);

}

module.exports = function() {

  hbs.registerHelper('videoUrl', videoUrl);
  hbs.registerHelper('checkVideo', checkVideo);

}

