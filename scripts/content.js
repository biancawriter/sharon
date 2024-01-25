
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

//Function to click both buttons
function waitForElement(selector) {
  var element = document.querySelector(selector);
  if (element) {
      shareLinkCount--;
      element.click();

      if (shareLinkCount) { // not 0, this is the 1st share 
          setTimeout(clickShareButton, 10000);
      }
      else{
          element.click();
          clickShareButton(); //not sure if this will work. I replaced the "click finished" with clickShareButton function
      }
  } else {
      setTimeout(waitForElement, 2000, selector); //this is the 2nd share
  }
}

function clickShareButton() {
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click();
  waitForElement('.internal-share__link');
}

var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; //creates variable for identifying the 1st share, and then cycling through all elements with this style.

// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    clickShareButton();
  }
});
