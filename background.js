'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let url = details.url;
        url = url.replace("www.reddit", "old.reddit");
         return {redirectUrl: url};
    },
    {
        urls: [
            "*://www.reddit.com/*",
        ],
    },
    ["blocking"]
);
