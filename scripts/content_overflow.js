//moving content here that is no longer relevant, but I don't want to lose it.
//chrome.runtime.onMessage.addListener((message) => {
//  if (message.type === "change-color") {
//    document.body.style.backgroundColor = "red";
//  }
//});





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




clickShareButton();


//Function to click the 2nd button in the Share process. This works!
function shareMy2() {
  var shareToFollowers = document.getElementsByClassName('internal-share__link');
  for(var i = 0; i < shareToFollowers.length; i++)
  {shareToFollowers[i].click();}
}
