// Click "Share My Listings" in extension to click "Share" for the last visible listing on the page.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "share-my") {
    function1();
  }
});

function function1 () {
  const clickDelta = 10000; // ms delay between clicks
  const cycleDelta = clickDelta * 100; // ms delay between share cycles

  const clickLinks = (el) => {
    el.click();

    // set a short timeout so there's time to load in the active parties/render the modal
    setTimeout(() => {
      document
        .querySelectorAll("[data-et-name^='share_poshmark']")
        .forEach((el) => el.click());
    }, 2000);
  };

  const notSold = (el) => {
    return (
      el
        .closest(".card")
        .querySelectorAll(".sold-tag,.sold-out-tag,.not-for-sale-tag")
        .length === 0
    );
  };

  const share = () => {
    // scroll to bottom to load more of the closet
    window.scrollTo(0, document.body.scrollHeight);

    let timeout = 0;
    const doShare = (el) => {
      if (notSold(el)) {
        // register link clicking
        setTimeout(() => clickLinks(el), timeout);

        // make sure next registered click comes after
        timeout += clickDelta;
      }
    };

    const shareLinks = document.querySelectorAll("[data-et-name=share]");
    shareLinks.forEach(doShare);
  };

  share();
  setInterval(share, cycleDelta);
} 
