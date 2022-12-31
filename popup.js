const fontSelect = document.getElementById("font-select");

fontSelect.addEventListener("change", function(event) {
  const selectedFont = event.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {font: selectedFont});
  });
});
