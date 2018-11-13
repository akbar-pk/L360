window.onload = function(){

    // check for Geolocation support
    if (navigator.geolocation) {
        console.log('Geolocation is supported');
        var startPos;
        var modalTimeout;

        var geoOptions = {
            maximumAge: 5 * 60 * 1000,
            timeout: 10 * 1000
          }
        var geoSuccess = function(position) {
            clearTimeout(modalTimeout);
            startPos = position;
            
            console.log(startPos.coords.latitude);
            console.log(startPos.coords.longitude);
        };
        var geoError = function(error) {
            const $locationInfoModalHtml = $('#locationInfoModal');
            let locationDialogOpts = {
                backdrop: false, 
                keyboard: false
            };
            
            let showHideModal = function(display){
                if(display == 'show') {
                    modalTimeout = setTimeout(function(){
                        $locationInfoModalHtml.modal(locationDialogOpts);
                        $('.modal-backdrop').removeClass("modal-backdrop");
                        showHideModal('autoHide');
                    }, 5000);
                }
                else if (display == 'hide') {
                    $locationInfoModalHtml.modal('hide');
                }
                else if('autoHide') {
                    setTimeout(function(){
                        showHideModal('hide');
                    }, 5000)
                }
            }
            // close modal on click on close button
            $locationInfoModalHtml.on('click', function(){
                showHideModal('hide')
            });
            switch(error.code) {
              case error.TIMEOUT:
                // The user didn't accept the callout
                showNudgeBanner();
                console.log('Location servie not enabled');
                //showHideModal('show');
                break;

            case 1:
                console.log('User denied location');
                showHideModal('show');
                break;
            }
          };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    }
    else {
        
        console.log('Geolocation is not supported for this Browser/OS.');
    }

};