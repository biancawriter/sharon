
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
function waitForElement(selector) {//Defines the waitForElement and establishes its parameter as "selector".
  var element = document.querySelector(selector); //Creates a variable called "element". In theory, it returns the first element on the page that has the "element" attribute. I get lost here, b/c I don't understand what "selector" means in this context. It hasn't been established as am element attribute, so I don't understand how this can retrieve an element. 
  if (element) { //If the element var exists (so if you're still on the first page?)
      shareLinkCount--; //Subtracts 1 from the NodeList of all elements with the attribute '.share-gray-large'.
      element.click(); //Click the element defined by the element variable. 

      if (shareLinkCount) { // If the variable is NOT 0 (so if you haven't gone through all the listings yet)
          setTimeout(clickShareButton, 10000); //Run the clickShareButton function in 10 seconds. This is the 1st share.
      }
      else{
          element.click();
          clickShareButton(); //not sure if this will work. I replaced the "click finished" with clickShareButton function
      }
  } else {//If the element var DOESN'T exist...
      setTimeout(waitForElement, 2000, selector); //this is the 2nd share
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
