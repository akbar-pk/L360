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

    // Cache share button
    var shareButton = $('.share-store');
    //var supported = document.getElementById('support');

    // Listen for any clicks
    //shareButton.on('click', shareStoreInfo);

    function shareStoreInfo (ev) {
        alert("Share Test");
        console.log(ev); 
        //return false;
        // Check if the current browser supports the Web Share API
        if (navigator.share !== undefined) {

            //Get info of clicked store
            var thisShareBtn = $(this);
            var shareInfo = {
                website: thisShareBtn.closest('action-btn').find('.website-link').attr('href'),
                call: thisShareBtn.closest('action-btn').find('.call-link').attr('href')
            };
            console.log(shareInfo);
            // Get the canonical URL from the link tag
            //var shareUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : window.location.href;

            // Share it!
            navigator.share({
                title: shareInfo.call,
                url: shareInfo.website
            }).then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing:', error));

            ev.preventDefault();
        } else {
            //supported.innerHTML = "Unfortunately, this feature is not supported on your browser";
            console.log("Unfortunately, this feature is not supported on your browser");
        }
    }

    /************* SHARE API END *************/

    return {
        changeLocator: changeLocator,
        shareStoreInfo: shareStoreInfo
    }

})();

const shareBtn = document.querySelector('.share-store');
const ogBtnContent = shareBtn.textContent;
const title = "Test Title";//document.querySelector('h1').textContent;
const url = document.querySelector('link[rel=canonical]') &&
            document.querySelector('link[rel=canonical]').href ||
            window.location.href;

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title,
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