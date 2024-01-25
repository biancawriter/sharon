document.addEventListener("DOMContentLoaded", () => {
  const buttonAbout = document.getElementById("about");
  buttonAbout.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "about-me" });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const buttonShareMy = document.getElementById("sharemy");
  buttonShareMy.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "share-my" });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const buttonShareFollowers = document.getElementById("sharefollowers");
  buttonShareFollowers.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "share-to-followers" });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttonStop = document.getElementById("stop");
  buttonStop.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "stop-sharing" });
    });
  });
});

//function myFunction() {
//	var elements = document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share"); // get all elements
//	for(var i = 0; i < elements.length; i++){
//		elements[i].style.backgroundColor = "blue";
//	}
//}

//function myFunction(){
//  document.getElementById("shareyour").style.color = "blue";
//}

//function myFunction(){
//  document.getElementsByClassName("d--fl ai--c social-action-bar__action social-action-bar__share").style.color = "blue";
//}

// document.querySelector('ul').append(...elements);
// need to figure out how to create JavaScript to specific buttons. I'm trying to reference "shareyour" below, but I don't think it works. 
// const shareyour = document.querySelector('shareyour');
// shareyour.addEventListener('click', async () => {
//  const tabIds = tabs.map(({ id }) => id);
//  if (tabIds.length) {
//    const group = await chrome.tabs.group({ tabIds });
//    await chrome.tabGroups.update(group, { title: 'DOCS' });
//  }
// });
// logic should be: When you click "share your" in the extension, click the Share element for one unsold listing in your closet. Continue sharing 1 unsold listing at a time, in random order. Should stop when user click "Stop All Shares".
// Add a per-minute limit. 