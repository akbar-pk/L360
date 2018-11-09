var homePage = (function(){

    /************* SEARCH OPTION (STORE / SERVICE) *************/
    // Cache DOM
    const $locatorOptDropdown = $('#locatorOptDropdown');
    var $locatorOptBtn = $locatorOptDropdown.find('#locatorOptBtn');
    var $locatonOptions = $locatorOptDropdown.find('#locatorOptItems a');

    //Bind Events
    $locatonOptions.on('click', changeLocator);

    function changeLocator (event) {
        let selectedBtn = event.target.id;

        //replace text on the button based on user selection
        $locatorOptBtn.text($('#'+selectedBtn).text());
        //console.log($("#selectedBtn").text());
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

    /* $("#change_view").on('click', changeView);

    function changeView() {

    } */

    /** Change view on click on the switcher END **/
    

    /************* MAP VIEW / LIST VIEW SWITCHER END *************/



    return {
        changeLocator: changeLocator
    }

})();

