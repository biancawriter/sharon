var cancelled = false;
var isSharing = false;


// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my" && isSharing === false) {
    cancelled = false;
    isSharing = true;
    function2();
  }
});


// Click "Stop All Sharing" in extension to stop all sharing.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "stop-sharing") {
    cancelled = true;
    isSharing = false;
  }
});


function function2 () {
var waitForFirstClick = 8000;
var waitForSecondClick = 2000;
var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1;

function endOrContinue () {
  if(shareLinkCount < 0) {
    setTimeout(function2, waitForFirstClick);
  }
  else{
    setTimeout(clickFirstShare, waitForFirstClick); //Call the clickFirstShare function in 15 sec to re-start the cycle.
  }
}

function shareToFollowers () {
  document.querySelector('.internal-share__link').click();
}

function clickFirstShare() {  
  
  var itemToShare = document.querySelectorAll('.share-gray-large')[shareLinkCount]; //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Second, it picks an item from the NodeList based on the # returned by the shareLinkCount variable.
  var itemStatus = itemToShare.closest(".card").querySelector(".sold-tag, .sold-out-tag, .not-for-sale-tag"); //if the item is NOT sold, returns "null"

  if (cancelled) {
    console.log('All done!');
    return;
  }

  if(itemStatus === null) {
    itemToShare.click(); 
    console.log(shareLinkCount); 
    console.log(itemToShare.closest(".card").querySelector(".tile__title").innerHTML); 
  
    afterFirstShare();//Calls the afterFirstShare function.
}
else{
  --shareLinkCount; //doesn't work when there are Sold items. Throws an error.
  clickFirstShare();
}

}

//Function to click both buttons after the process has started.
function afterFirstShare() {
  --shareLinkCount;
  setTimeout(shareToFollowers, waitForSecondClick); //Click the 2nd share button in 2 sec.
  setTimeout(endOrContinue, 3000);
  }

clickFirstShare(); //after defining the functions, call the starting one.
}






