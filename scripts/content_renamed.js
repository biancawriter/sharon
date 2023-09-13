
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

      if (shareLinkCount) { 
          setTimeout(clickShareButton, 10000); // Share a new item every 10 seconds.
      }
      else{
          element.click();
          clickShareButton(); // My intent here was to re-start at the first item after the script has shared all the items one time. This doesn't seem to work.
      }
  } else {
      setTimeout(waitForElement, 2000, selector); //When the pop-up window opens, wait 2 seconds to share the item.
  }
}

function clickShareButton() {
  document.querySelectorAll('.button1')[shareLinkCount].click();
  waitForElement('.button2');
}//Defines the function to share the item on the page. 

var shareLinkCount = document.querySelectorAll('.button1').length - 1; // Creates variable for identifying the 1st share, and then cycling through all elements with this style.

// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    clickShareButton();
  }
});



//Next tasks:
//MVP:
//Continue to share listings when you get through the first cycle
//Only share Available listings
//Make "Stop Sharing" work
//Avoid the "click finished" pop-up. This is an alert in the code.
//Make sure the clicking is only triggered by clicking the button, and not by just being on the page
//Might have to re-add calling the clickShareButton() function
//Later: 
//Respond to "captcha": Make a sound, send an email....