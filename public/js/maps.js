 $(document).ready(function(){
        initialize('Lima Peru');
        $('#search').bind('click',function(){
            initialize($('#address').val());    
        })
    });
 
   function initialize(address) {
	var geoCoder = new google.maps.Geocoder(address)
	var request = {address:address};
	geoCoder.geocode(request, function(result, status){
		var latlng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
		var myOptions = {
		  zoom: 15,
		  center: latlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		var marker = new google.maps.Marker({position:latlng,map:map,title:'title'});
	})
  }