$(document).ready(function() {
  var foodFinder = "<li>Food Finder</li>";
  var base_url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD6T99mecZLEAdgwI0t3--8FnR5r8PgOwk&callback=initMap";
  function initMap() {
    var pyrmont = {lat: -33.867, lng: 151.195};

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });
  }
  //var radius = "radius=500";
  //var location = "location=-33.8670522,151.1957362";
  //var placeType = "type=restaurant";
  //var keyword = "keyword=cruise";
  //var key = "key=AIzaSyAlUp4oLONsBN_Az95zjPkHjNT4qXOXu5c";
  $.ajax({
    url: base_url,
    type: 'GET',
    dataType: 'jsonp',
    //jsonpCallback: 'jsonCallback',
    success: function(data) {
      console.log(data);

    }
  })
})
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

//AIzaSyD6T99mecZLEAdgwI0t3--8FnR5r8PgOwk

//"https://maps.googleapis.com/maps/api/js?key=AIzaSyD6T99mecZLEAdgwI0t3--8FnR5r8PgOwk&callback=initMap"
