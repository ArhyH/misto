50.460512, 30.509680

function initMap() {
  var coordinates = {lat: 50.460512, lng: 30.509680},
  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 18,
    disableDefaultUI: boolean
  }),
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: URL('../images/map-pin.svg')
  });
  $.getJSON("../map-style_colored.json", function(data) {
    map.setOptions({styles: data});
  });
}
