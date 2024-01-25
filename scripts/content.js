
// Click "Learn about me" in extension to click "About" on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "about-me") {
var about = document.getElementsByClassName("btn btn--tertiary tr--capitalize m--l--4");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});


// Click "Stop All Sharing" in extension to stop all sharing. Doesn't work: clickShareButton, shareLinkCount, element. Need to figure out how to fix this. Although the issue might be with the "Share My" button, and NOT with this snippet.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "stop-sharing") {
    clearTimeout(waitForElement);
  }
});

var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; 

function shareToFollowers () {
  document.querySelector('.internal-share__link').click();
}

//Function to click both buttons
function waitForElement() {
    setTimeout(shareToFollowers, 2000);
    shareLinkCount--;
    setTimeout(clickShareButton, 15000);
}

function clickShareButton() { //Defines how the clickShareButton function works.  
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click(); //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Then it picks an item from the NodeList based on the # returned by the shareLinkCount variable. Second, it clicks that item.
  waitForElement();//Calls the waitForElement function.
}

// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    clickShareButton();
  }
});
