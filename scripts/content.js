//chrome.runtime.onMessage.addListener((message) => {
//  if (message.type === "change-color") {
//    document.body.style.backgroundColor = "red";
//  }
//});
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "about-me") {
var about = document.getElementsByClassName("btn btn--tertiary tr--capitalize m--l--4");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
var about = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share");
for(var i = 0; i < about.length; i++)
{about[i].click();}
  }
});

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