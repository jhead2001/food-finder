$(document).ready(function() {
  var foodFinder = "<li>Food Finder</li>";
  var base_url = "maps.googleapis.com/maps/api/place/nearbysearch/json?";
  var radius = 500;
  var location = "location=-33.8670522,151.1957362";
  var type = "type=restaurant";
  var keyword = "keyword=cruise";
  var key = "key=AIzaSyAlUp4oLONsBN_Az95zjPkHjNT4qXOXu5c";
  $.ajax({
    url: base_url + "&" + radius + "&" + location + "&" + type + "&" + keyword + "&" + key,

    'type': 'GET',
    'success': function(data) {
    }
  })
}
