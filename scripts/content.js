//chrome.runtime.onMessage.addListener((message) => {
//  if (message.type === "change-color") {
//    document.body.style.backgroundColor = "red";
//  }
//});



// Click "Learn about me" in extension to click "About" on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "about-me") {
var about = document.getElementsByClassName("btn btn--tertiary tr--capitalize m--l--4");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});


// Click "Share Your Listings" in extension to click "Share" for the last visible listing on the page. This works. 
//commenting this out as a test
//chrome.runtime.onMessage.addListener((message) => {
//  if (message.type === "share-my") {
//var listing = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share");
//for(var i = 0; i < listing.length; i++)
//{listing[i].click();}
//  }
//});

// Click "Share to My Followers" in extension to click "Share" for the last visible listing on the page. This works! 
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-to-followers") {
    document.getElementsByClassName('internal-share__link')[0].click();
  }
});

// try using functions to click the share buttons. This works!
// Click "Share Your Listings" in extension to click "Share" for the last visible listing on the page.
//Somehow, having this in the code causes the function waitForElement function to run; I don't even click the button! Will need to fix this.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    waitForElement();
  }
});

// Click "Stop All Sharing" in extension to stop all sharing. Doesn't work: clickShareButton, shareLinkCount, element. Need to figure out how to fix this. Although the issue might be with the "Share My" button, and NOT with this snippet.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "stop-sharing") {
    clearTimeout(waitForElement);
  }
});

//Function to click the 1st button in the Share process. This works!
//comment out to test querySelector
//function shareMy1() {
//  var listing = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share");
// for(var i = 0; i < listing.length; i++)
//  {listing[i].click();}
//}

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
          alert('Click Finished');
      }
  } else {
      setTimeout(waitForElement, 2000, selector);
  }
}

function clickShareButton() {
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click();
  waitForElement('.internal-share__link');
}

var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1;

//const notSold


clickShareButton();


//Function to click the 2nd button in the Share process. This works!
function shareMy2() {
  var shareToFollowers = document.getElementsByClassName('internal-share__link');
  for(var i = 0; i < shareToFollowers.length; i++)
  {shareToFollowers[i].click();}
}

//Create a callback so that one function triggers the next.

//Next tasks:
//String together 2 clicks: click share, detect that the pop-up is open, and then click other share.
//Continue to share multiple listings
//Set a limit
//Only share Available listings