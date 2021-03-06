// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'ff-show-tab') {
    chrome.tabs.query({url: 'https://*.force.com/*'}, (tabs) => {
      let tabId = tabs[0].id
      let windowId = tabs[0].windowId
      chrome.tabs.update(tabId, {active: true})
      chrome.windows.update(windowId, {focused: true})
    })
  }
})
