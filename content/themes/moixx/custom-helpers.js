var hbs = require('express-hbs');


function videoUrl(item, options) {
  debugger;
  if (!item || typeof(item) != 'object' || !item.length ) {
    return new options.fn("");
  };

  var tagString = "";

  var re = /\w+(?=\$)/g;

  for (var i = item.length - 1; i >= 0; i--) {
    tagString += item[i].name + ", "
  };

  var resultRegx = re.exec(tagString)

  if(resultRegx && resultRegx[0]){
    return new hbs.SafeString(resultRegx[0]);
  }
  return new hbs.SafeString("");

}

function checkVideo(item, options) {
  debugger;
  if (!item || typeof(item) != 'object' || !item.length ) {
    return options.inverse(this);
  };

  var tagString = "";

  var re = /\w+(?=\$)/g;

  for (var i = item.length - 1; i >= 0; i--) {
    tagString += item[i].name + ", "
  };

  var resultRegx = re.exec(tagString)

  if(resultRegx && resultRegx[0]){

    return options.fn(this);

  }
  return options.inverse(this);

}

module.exports = function() {

  hbs.registerHelper('videoUrl', videoUrl);
  hbs.registerHelper('checkVideo', checkVideo);

}

