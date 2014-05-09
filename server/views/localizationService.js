// From http://dev-blog.cloud-spinners.com/2014/02/angular-js-localization-with-require-js.html

define(['app','i18n!nls/strings'],function (app,localeStrings) {
  'use strict';

  app.factory('locale', function () {
    return localeStrings;
  }); //$locale

  app.factory('localizationService',['locale',function (locale) {
    function getLocalizedValue (path) {
      var keys = path.split('.');
      return getValue(keys);
    } //getLocalizedValue

    function getValue (keys) {
      var level = 0;

      function get (context) {
        if(context[keys[level]]) {
          var val = context[keys[level]];

          if(typeof val === 'string') {
            return val;
          } else {
            level++;
            return get(val);
          }
        } else {
          console.error('Missing localized string for: ',keys);
        }
      }

    return get(locale);
    } //getValue

    return {
      getLocalizedString: function (path) {
        return getLocalizedValue(path,locale);
      } //getLocalizedString
    };
    
  }]); //$localizationService
  
});
