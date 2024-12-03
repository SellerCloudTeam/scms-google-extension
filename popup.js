const colorInput = document.getElementById('colorInput');
const toggleSwitch = document.getElementById('toggleSwitch');
const saveButton = document.getElementById('saveButton');

// Load the selected color and extension state
chrome.storage.local.get(['selectedColor', 'extensionEnabled'], (data) => {
  const selectedColor = data.selectedColor || '#8fc800'; // Default color
  const extensionEnabled = data.extensionEnabled !== false; // Default to true if undefined

  // Set the toggle switch state
  toggleSwitch.checked = extensionEnabled;

  // Set the color input value
  colorInput.value = selectedColor;
});

// Listen for the "Save" button click
saveButton.addEventListener('click', () => {
  const color = colorInput.value;
  chrome.storage.local.set({ selectedColor: color }, () => {
    // Refresh the page to apply changes
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});

// Listen for toggle switch changes
toggleSwitch.addEventListener('change', () => {
  const extensionEnabled = toggleSwitch.checked;
  chrome.storage.local.set({ extensionEnabled }, () => {
    // Send message to content script to enable or disable styles
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleExtension', enabled: extensionEnabled });
    });
  });
});
