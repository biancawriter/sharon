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

const scrollToBottomAndWait = () => {
  window.scrollTo(0, document.body.scrollHeight);

  return new Promise((resolve) => {
    setTimeout(() => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;
      if (!isScrolledToBottom) {
        resolve(scrollToBottomAndWait());
      } else {
        resolve();
      }
    }, 2000);
  });
};

function function1 () {
  const wait1 = 1000;
  const wait2 = 8000;
  const startAgain = (wait1 + wait2) * 100;

const clickItem = (item) => {
  item.click();
}

const itemAvailable = (item) => {
  return (
    item
      .closest(".card")
      .querySelectorAll(".sold-tag,.sold-out-tag,.not-for-sale-tag")
      .length === 0
  );
}




function function2 () {
var shareLinkCount = document.querySelectorAll('.share-gray-large').length - 1; 

function shareToFollowers () {
  document.querySelector('.internal-share__link').click();
}

function clickFirstShare() { //Defines how the clickFirstShare function works.  
  document.querySelectorAll('.share-gray-large')[shareLinkCount].click(); //First, it creates a NodeList of all elements with the attribute '.share-gray-large'. Second, it picks an item from the NodeList based on the # returned by the shareLinkCount variable. Third, it clicks that item.
  afterFirstShare();//Calls the afterFirstShare function.
}

function done() {
  alert('All done!');
}

//Function to click both buttons after the process has started.
function afterFirstShare() {
  setTimeout(shareToFollowers, 2000); //Click the 2nd share button in 2 sec.
  shareLinkCount--; //Decrement the shareLinkCount #
  setTimeout(clickFirstShare, 8000); //Call the clickFirstShare function in 15 sec to re-start the cycle.
  }

  clickFirstShare(); //after defining the functions, call the starting one.
}


  function2();
  setInterval(function2, startAgain);
}