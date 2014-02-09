/* GET 'home' page */
module.exports.homelist = function (req,res) {
  var data = {
    title: "Loc9r - find a place to work with wifi",
    pageHeader: {
      title: "Loc9r",
      subtitle: "Find places to work with wifi near you!"
    },
    sidebar: "Looking for wifi and a seat? Loc9r helps you find places to work when out and about.  Perhaps with coffee, cake or a pint?  let Loc9r help you find the place you're looking for.",
    locations: [{
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      distance: "100m",
      rating: 3.1,
      facilities: ["Hot drinks","Food","Premium wifi"]
    },{
      name: "Mints Euro Asian Cuisine",
      address: "11088 Olson Dr, Rancho Cordova, CA 95670",
      distance: "1.3mi",
      rating: 3.5,
      facilities: ["Chinese","Euro Asian","Walkable"]
    },{
      name: "Sala Thai",
      address: "3101 Zinfandel Dr, Rancho Cordova, CA 95670",
      distance: "0.6mi",
      rating: 4.38,
      facilities: ["Thai","Walkable"]
    },{
      name: "Cafe Hero",
      address: "126 High Street, Reading, RG6 1PS",
      distance: "200m",
      rating: 3.86,
      facilities: ["Hot drinks","Food","Premium wifi"]
    },{
      name: "Burger Queen",
      address: "127 High Street, Reading, RG6 1PS",
      distance: "250m",
      rating: 2,
      facilities: ["Food","Premium wifi"]
    }]
  };
  res.render("locations-list",data);
};

/* GET 'Location Info' page */
module.exports.locationInfo = function (req,res) {
	res.render("location-info",{ title: "Location info" });
};

/* GET 'Add Review' page */
module.exports.addReview = function (req,res) {
	res.render("location-review-form",{ title: "Add review" });
};