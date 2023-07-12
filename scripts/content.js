//chrome.runtime.onMessage.addListener((message) => {
//  if (message.type === "change-color") {
//    document.body.style.backgroundColor = "red";
//  }
//});

// Click "Learn about me" in extension to click "About" on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
var about = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});

// Click "Share Your Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "about-me") {
var about = document.getElementsByClassName("btn btn--tertiary tr--capitalize m--l--4");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});

// Click "Share to My Followers" in extension to click "Share" for the last visible listing on the page. Attempted to use jquery to get the a element by data-et-name. Doesn't work yet.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-to-followers") {
  const el1 = document.querySelector('[data-et-name="share_poshmark"]');
  document.el1.click();
  }
});

///
// Click "Share to My Followers" in extension to click "Share" for the last visible listing on the page.
//chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-to-followers") {
//var about = document.getElementsByClassName("internal-share__link");
//for(var i = 0; i < about.length; i++)
//{about[i].click();}
//  }
//});

//Attempting to detect the share pop-up window. Do more research on: https://developer.chrome.com/docs/extensions/reference/windows/#event-onCreated. 
//Should detect the specific pop-up, and then click the To My Followers icon.
//chrome.windows.onCreated.addListener(
//  callback: function,
//  filters: "popup",
//)


//chrome.runtime.onMessage.addListener((message) => 
//{
////  if (message.type === "change-color") 
//{
//	var elements = document.getElementsByClassName("grid-page");
//	for(var i = 0; i < elements.length; i++)
//{
//		elements[i].style.backgroundColor = "red";
//  }
//}
//)
//};