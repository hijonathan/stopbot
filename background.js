function turn_on(){
  chrome.browserAction.setBadgeText({ text: "" })
  localStorage['images_on'] = true
  chrome.contentSettings.images.set({ 'primaryPattern': "<all_urls>", setting: 'allow' })
  console.log("Images turned on.")
}

function turn_off(){
  chrome.browserAction.setBadgeText({ text: "Off" })
  localStorage['images_on'] = false
  chrome.contentSettings.images.set({ 'primaryPattern': "<all_urls>", setting: 'block' })
  console.log("Images turned off.")
}

if(localStorage['images_on'] == "false"){
  turn_off();
} else {
  turn_on();
}

console.log("Adding browser action behavior...")
chrome.browserAction.onClicked.addListener(function(tab) {
  if(localStorage['images_on'] == "true"){
    turn_off();
  } else {
    turn_on();    
  }
});