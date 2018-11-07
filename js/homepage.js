var homePage = (function(){

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

    return {
        changeLocator: changeLocator
    }

})();