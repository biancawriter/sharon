var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; 

function shareToFollowers () {
  document.querySelector('.internal-share__link').click();
}


function clickFirstShare() { //Defines how the clickFirstShare function works.  
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click(); //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Second, it picks an item from the NodeList based on the # returned by the shareLinkCount variable. Third, it clicks that item.
  afterFirstShare();//Calls the afterFirstShare function.
}

function done() {
  alert('All done!');
}

//Function to click both buttons after the process has started.
function afterFirstShare() {
  setTimeout(shareToFollowers, 2000); //Click the 2nd share button in 2 sec.
  shareLinkCount--; //Decrement the shareLinkCount #
  setTimeout(clickFirstShare, 15000); //Call the clickFirstShare function in 15 sec to re-start the cycle.
  if (shareLinkCount < 0) {
    //setTimeout(done, 4000);
    //var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; This is NOT working. It keeps resharing the last item. :( )
   // setTimeout(clickFirstShare, 5000);
  }
  }

// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    clickFirstShare();
  }
});
