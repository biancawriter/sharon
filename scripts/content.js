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

// Click "Share to My Followers" in extension to click "Share" for the last visible listing on the page. This finally works! Test if this works when there's a Posh party, bc then there are 2 possible links.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-to-followers") {
    document.getElementsByClassName('internal-share__link')[0].click();
  }
});

// try using functions to click the share buttons. This works!
// Click "Share Your Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
shareMy1();
  }
});

//Function to click the 1st button in the Share process. This works!
function shareMy1() {
  var listing = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share");
  for(var i = 0; i < listing.length; i++)
  {listing[i].click();}
}


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