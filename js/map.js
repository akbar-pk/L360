var params;
var changeViewClicked = false;
    // dom ready

    
    $(document).on('click', '#change_view', function(e){
        changeViewClicked = true;
        
        e.preventDefault();
        
        if($("#map_canvas:visible").length == 0) {

            console.log("Test 1");

            $("#search_list").hide();
            $("#map_canvas").show();

            if (window.google && google.maps) {
                // Map script is already loaded
                //alert("Map script is already loaded. Initialising");
                initializeMap();
            } else {
                //alert("Lazy loading Google map...");
                lazyLoadGoogleMap();            
            }

            
            $("#change_view #map_view").removeClass('active');
            $("#change_view #list_view").addClass('active');
                
        } 
        else {
            console.log("Test 2");

            $("#map_canvas").hide();
            $("#search_list").show();
            $("#change_view #map_view").addClass('active');
            $("#change_view #list_view").removeClass('active'); 
            
        }
    });
  

    function initialize(params) {
        var myLatlng = new google.maps.LatLng(12.971891, 77.641151);
        var mapOptions = {
            center: myLatlng,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };        
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "Hello From Knockananna!!!"
        });        
    }

    function lazyLoadGoogleMap() {
        $.getScript("https://maps.google.com/maps/api/js?sensor=true&callback=initializeMap")
        .done(function (script, textStatus) {            
            //alert("Google map script loaded successfully");
        })
        .fail(function (jqxhr, settings, ex) {
            //alert("Could not load Google Map script: " + jqxhr);
        });
    }

    function initializeMap() {
        initialize(params);
    }