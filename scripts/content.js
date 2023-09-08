
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

// Click "Share to My Followers" in extension to click "Share" for the last visible listing on the page. This works! 
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-to-followers") {
    clickShareButton(); //not sure if this will work
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
          alert('Click Finished');
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