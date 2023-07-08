// Need to figure out how to add JS to the 2nd button

const tabs = await chrome.tabs.query({
  url: [
    'https://developer.chrome.com/docs/webstore/*',
    'https://developer.chrome.com/docs/extensions/*'
  ]
});

document.querySelector('ul').append(...elements);
// need to figure out how to create JavaScript to specific buttons. I'm trying to reference "shareyour" below, but I don't think it works. 
const shareyour = document.querySelector('shareyour');
shareyour.addEventListener('click', async () => {
  const tabIds = tabs.map(({ id }) => id);
  if (tabIds.length) {
    const group = await chrome.tabs.group({ tabIds });
    await chrome.tabGroups.update(group, { title: 'DOCS' });
  }
});
// logic should be: When you click "share your" in the extension, click the Share element for one unsold listing in your closet. Continue sharing 1 unsold listing at a time, in random order. Should stop when user click "Stop All Shares".
// Add a per-minute limit. 