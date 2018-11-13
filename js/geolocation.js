window.onload = function(){

    // check for Geolocation support
    if (navigator.geolocation) {
        console.log('Geolocation is supported');
        var startPos;
        var geoSuccess = function(position) {
            startPos = position;
            console.log(startPos.coords.latitude);
            console.log(startPos.coords.longitude);
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS.');
    }

};