var Handlebars = require("handlebars");

exports.stars = function (rating) {
  var ret = '';
  for(var i = 1;i <= rating;i++) {
    ret += '<i class="fa fa-star"></i>';
  }
  var frac = rating % 1;
  ret += '<i class="fa fa-star';
  if((frac > 0.25) && (frac < 0.75)) {
    ret += '-half';
  }
  if(frac < 0.75) {
    ret += '-o';
  }
  ret += '"></i>';
  for(i = rating + 1;i < 5;i++) {
    ret += '<i class="fa fa-star-o"></i>';
  }
  return new Handlebars.SafeString(ret);
}; //stars
