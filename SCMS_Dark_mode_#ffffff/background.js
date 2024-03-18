chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' && tab.url && tab.url.startsWith('https://scms.sellercloud.com/')) {
      chrome.scripting.insertCSS({
        target: {tabId: tabId},
        css: `body { background-color: #262626 !important; }`
      }).catch(error => console.error('Error injecting CSS:', error));
    }
  });
  