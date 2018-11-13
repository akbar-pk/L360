window.onload = function(){

    // check for Geolocation support
    if (navigator.geolocation) {
        console.log('Geolocation is supported');
        var startPos;
        var geoSuccess = function(position) {
            startPos = position;
            document.getElementById('lat').innerHTML = startPos.coords.latitude;
            document.getElementById('lon').innerHTML = startPos.coords.longitude;
            console.log(startPos.coords.latitude);
            console.log(startPos.coords.longitude);
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
    }
    else {
        document.getElementById('no_geo').innerHTML = "Location servie not enabled";
        //console.log('Geolocation is not supported for this Browser/OS.');
    }

};