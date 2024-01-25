
document.addEventListener("DOMContentLoaded", () => {
  const buttonShareMy = document.getElementById("sharemy");
  buttonShareMy.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "share-my" });
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

//The following snippet is a test to try to get Sharon to play a sound when it detects a reCAPTCHA.
document.addEventListener("DOMContentLoaded", () => {
  const buttonStop = document.getElementById("beep");
  buttonStop.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "play-beep" });
    });
  });
});