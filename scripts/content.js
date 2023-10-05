//Goal of this round: Repeat the cycle. Incorporate the approach from: https://stackoverflow.com/questions/66718421/how-do-you-repeatedly-click-two-buttons-when-you-have-to-wait-for-the-second-but 



// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    function1();
  }
});

// Click "Scroll to bottom of page" in extension to scroll. If you have a lot of items, we recommend filtering by Available before you run the extension.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "scroll-to-bottom") {
    scrollToBottomAndWait();
  }
});



function function1 () {

var waitForFirstClick = 8000;
var waitForSecondClick = 2000;

function function2 () {
var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1;


function endOrContinue () {
  if(shareLinkCount != 0) {
    setTimeout(clickFirstShare, waitForFirstClick); //Call the clickFirstShare function in 15 sec to re-start the cycle.
  }
  else{
    setTimeout(function2, waitForFirstClick);
  }
}

function shareToFollowers () {
  document.querySelector('.internal-share__link').click();
}

function clickFirstShare() {  
  var itemToShare = document.querySelectorAll('.share-gray-large')[shareLinkCount]; //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Second, it picks an item from the NodeList based on the # returned by the shareLinkCount variable.
  var itemStatus = itemToShare.closest(".card").querySelector(".sold-tag, .sold-out-tag, .not-for-sale-tag"); //if the item is NOT sold, returns "null"

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

function2();


// Click "Stop All Sharing" in extension to stop all sharing.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "stop-sharing") {
    clearTimeout(); //figure out how to clear
  }
});
}

