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


var moment = require('moment');


//! moment.js locale configuration
//! locale : spanish (es)
//! author : Julio Napurí : https://github.com/julionc

moment.locale('es', {
  months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort : 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  weekdays : 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  weekdaysShort : 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
  weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
  longDateFormat : {
      LT : 'H:mm',
      LTS : 'H:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D [de] MMMM [de] YYYY',
      LLL : 'D [de] MMMM [de] YYYY H:mm',
      LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
  },
  calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
  relativeTime : {
      future : 'en %s',
      past : 'hace %s',
      s : 'unos segundos',
      m : 'un minuto',
      mm : '%d minutos',
      h : 'una hora',
      hh : '%d horas',
      d : 'un día',
      dd : '%d días',
      M : 'un mes',
      MM : '%d meses',
      y : 'un año',
      yy : '%d años'
  },
  ordinalParse : /\d{1,2}º/,
  ordinal : '%dº',
  meridiemParse: /PD|MD/,
  isPM: function (input) {
      return input.charAt(0) === 'M';
  },
  meridiem : function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
  },
  week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});





