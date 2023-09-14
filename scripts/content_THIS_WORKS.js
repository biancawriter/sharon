
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
function waitForElement(selector) {//Defines the waitForElement function and establishes its parameter as "selector". The clickShareButton function set the parameter to .internal-share__link.
  var element = document.querySelector(selector); //Creates a variable called "element". In theory, it returns the first element on the page that has the ".internal-share__link" attribute.
  if (element) { //If the element var exists (so if you're on the 2nd page?)
      shareLinkCount--; //Subtracts 1 from the NodeList of all elements with the attribute '.share-gray-large'.
      element.click(); //Click the 2nd share button?

      if (shareLinkCount) { // If the shareLinkCount variable is NOT 0 (so if you haven't gone through all the listings yet)
          setTimeout(clickShareButton, 10000); //Run the clickShareButton function in 10 seconds. This is the 1st share.
      }
      else{//If the shareLinkCount variable IS 0 (if you've gone through all the listings on the page)
        element.click(); //Click the last 2nd share?
        alert('Click Finished');//Add pop-up message. This is the end of the function.
      }
  } else {//If the element var DOESN'T exist 
      setTimeout(waitForElement, 2000, selector); //Click the 2nd share button in 2 seconds.
  }
}

function clickShareButton() { //Defines how the clickShareButton function works.  
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click(); //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Then it picks an item from the NodeList based on the # returned by the shareLinkCount variable. Second, it clicks that item.
  waitForElement('.internal-share__link');//Calls the waitForElement function.
}

var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; //Creates a variable. First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Second, it returns the number of elements in that list by using .length. Third, it subtracts 1 from that number. The final variable is "the total number of elements - 1". Hmm wouldn't that always return the same number?

// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    clickShareButton();
  }
});
