var homePage = (function(){

    /************* SEARCH OPTION (STORE / SERVICE) *************/
    // Cache DOM
    const $locatorOptSwitch = $('#search_opt_switch');
    var $storeRadio = $("#storeRadio");
    var $serviceRadio = $("#serviceRaio");
    const $locatorSearchField = $('#locator_search_field');
    const $searchFldClearBtn = $('#searchClearBtn');

    //Bind Events
    $locatorOptSwitch.on('change', changeLocator);
    $locatorSearchField.on('keyup', searchFieldKeyup);
    $searchFldClearBtn.on('click', clearSearchField)

    function changeLocator (event) {
        if($locatorOptSwitch.prop('checked')) {
            $storeRadio.prop('checked', true);
        } else {
            $serviceRadio.prop('checked', true);
        }
        
    }

    function searchFieldKeyup () {
        var searchKeyLen = $locatorSearchField.val().length;
        console.log(searchKeyLen);
        if(searchKeyLen > 0) {
            $searchFldClearBtn.show();
        } 
        else {
            $searchFldClearBtn.hide();
        }
    }

    function clearSearchField () {
        $locatorSearchField.val('');
        $searchFldClearBtn.hide();
    }

    /************* SEARCH OPTION (STORE / SERVICE) END *************/

    /************* SHARE API *************/

    let shareBtn = $('.share-store');
    let title = "Buy A Lenovo";
    let url = "https://www.buyalenovo.com";
    //let text = "Planning to buy a laptop? Check this out \n Call to Lenovo store: 9538908168 \n or visit";
    var text = "Address: c store, #39, 80 Feet Rd, Indiranagar, Bengaluru. \n Call: 9538908168 \n Locate on map: https://www.google.com/maps/search/?api=1&query=12.9760992,77.6427818&query_place_id=";


    shareBtn.on('click', () => {
        //let text = $(this).parents('.item-wrapper').find('address').text();
    if (navigator.share) {
        navigator.share({
            title,
            text,
            url
        }).then(() => {
            showMessage(shareBtn, 'Thanks! 😄');
        })
        .catch(err => {
            showMessage(shareBtn, `Couldn't share 🙁`);
        });
    } else {
            showMessage(shareBtn, 'Not supported 🙅‍');
    }
    });

    function showMessage(element, msg) {
        console.log('Done');
    /* element.textContent = msg;
    setTimeout(() => {
        element.textContent = ogBtnContent;
    }, 2000); */
    }

    /************* SHARE API END *************/

    /************* MAP VIEW / LIST VIEW SWITCHER *************/
    
    setTimeout(function() {
        $("#change_view").addClass('visible');

        setTimeout(function() {
            $("#change_view").addClass('done');
        }, 5000);

    }, 3000);
    
    /** Change view on click on the switcher **/

    
    /** Change view on click on the switcher END **/
    

    /************* MAP VIEW / LIST VIEW SWITCHER END *************/

    return {
        changeLocator: changeLocator
    }

})();

