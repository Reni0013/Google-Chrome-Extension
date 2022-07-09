chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var newURL = "localhost:90/PHP_Project/login/login.php?url=" + tabs[0].url;
        chrome.tabs.create({ url: newURL });
    });
});